"use client"

import React, { useEffect } from "react"

export default function DomGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const originalCreateElement = document.createElement.bind(document)
    const originalAppendChild = Node.prototype.appendChild
    const originalInsertBefore = Node.prototype.insertBefore
    const originalSetAttribute = Element.prototype.setAttribute

    document.createElement = function (tagName: string) {
      return originalCreateElement(tagName)
    }

    Object.defineProperty(Node.prototype, "appendChild", {
      value: function (node: Node): Node {
        if ((node as HTMLElement).hasAttribute && (node as HTMLElement).hasAttribute("cz-shortcut-listen")) {
          return node as Node
        }
        return originalAppendChild.call(this, node)
      },
      writable: true,
      configurable: true,
    })

    Object.defineProperty(Node.prototype, "insertBefore", {
      value: function (newNode: Node, refNode: Node | null): Node {
        if ((newNode as HTMLElement).hasAttribute && (newNode as HTMLElement).hasAttribute("cz-shortcut-listen")) {
          return newNode as Node
        }
        return originalInsertBefore.call(this, newNode, refNode)
      },
      writable: true,
      configurable: true,
    })

    Object.defineProperty(Element.prototype, "setAttribute", {
      value: function (name: string, value: string): void {
        if (name === "cz-shortcut-listen") return
        originalSetAttribute.call(this, name, value)
      },
      writable: true,
      configurable: true,
    })

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "cz-shortcut-listen") {
          const target = mutation.target as HTMLElement
          target.removeAttribute("cz-shortcut-listen")
        }
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ["cz-shortcut-listen"],
    })

    return () => {
      observer.disconnect()
      document.createElement = originalCreateElement
      Object.defineProperty(Node.prototype, "appendChild", {
        value: originalAppendChild,
        writable: true,
        configurable: true,
      })
      Object.defineProperty(Node.prototype, "insertBefore", {
        value: originalInsertBefore,
        writable: true,
        configurable: true,
      })
      Object.defineProperty(Element.prototype, "setAttribute", {
        value: originalSetAttribute,
        writable: true,
        configurable: true,
      })
    }
  }, [])

  return null
}
