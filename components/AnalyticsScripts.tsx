import React from 'react'

export default function AnalyticsScripts(){
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID

  return (
    <>
      {GA_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
          <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_ID}');`}} />
        </>
      )}

      {LINKEDIN_ID && (
        <script dangerouslySetInnerHTML={{__html: `(function(){var _ = document.createElement('script');_.type='text/javascript';_.async=true;_.innerHTML = "_linkedin_id='${LINKEDIN_ID}';";document.head.appendChild(_);})();`}} />
      )}
    </>
  )
}
