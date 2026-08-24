# Form Security Test Data

Use these test cases to verify the spam and bad-word filters in the contact forms.

## Bad Words Tests

| Test # | Name | Message | Expected Result |
|--------|------|---------|-----------------|
| 1 | John Doe | I want to buy cheap viagra online | Blocked - bad word |
| 2 | Spam Bot | This is a scam opportunity | Blocked - bad word |
| 3 | Test User | I won a lottery prize | Blocked - bad word |
| 4 | Normal User | I am interested in R&D consulting | Pass |

## Spam Pattern Tests

| Test # | Name | Message | Expected Result |
|--------|------|---------|-----------------|
| 5 | Link Spammer | Visit our website at https://spam.com | Blocked - URL |
| 6 | Crypto Bot | Buy bitcoin now, limited time offer | Blocked - spam pattern |
| 7 | SEO Spammer | We do link exchange and guest post services | Blocked - spam pattern |
| 8 | Urgency Bot | Act now! Limited time offer, call us now | Blocked - spam pattern |
| 9 | Repeat Spammer | aaaaaaa bbbbbbb ccccccc | Blocked - repeated chars |
| 10 | Normal User | I would like to discuss a research collaboration project | Pass |

## Length Validation Tests

| Test # | Name | Message | Expected Result |
|--------|------|---------|-----------------|
| 11 | Short Msg | Hi | Blocked - too short |
| 12 | Long Msg | [2001+ characters of text...] | Blocked - too long |

## Email Validation Tests

| Test # | Email | Expected Result |
|--------|-------|-----------------|
| 13 | test@mailinator.com | Blocked - disposable |
| 14 | test@guerrillamail.com | Blocked - disposable |
| 15 | test@company.com | Pass |
| 16 | invalid-email | Blocked - invalid format |

## Rate Limit Tests

| Test # | Action | Expected Result |
|--------|--------|-----------------|
| 17 | Submit 3 forms quickly | Pass |
| 18 | Submit 4th form within 1 minute | Blocked - rate limit |

## Honeypot Test

| Test # | Honeypot Field | Expected Result |
|--------|---------------|-----------------|
| 19 | Filled (bot) | Silently accepted (no error) |
| 20 | Empty (human) | Normal processing |
