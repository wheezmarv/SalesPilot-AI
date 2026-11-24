# SalesPilot AI — Architecture

## Product direction
SalesPilot AI is a WhatsApp-first CRM and sales automation app designed for Nigerian SMEs. It aims to combine business workspaces, customer and lead records, a product/service catalogue, customer conversations and a business-aware AI sales assistant.

## Logical components
- Workspace layer: resolve the authenticated user and business membership.
- CRM layer: manage customers, leads, product/service catalogue and activity.
- Conversation layer: organise WhatsApp conversations and message history.
- AI sales-agent layer: use the current business's approved profile, catalogue, FAQs and instructions.
- Handoff layer: pause AI handling and route complaints, sensitive matters, human requests or low-confidence cases to staff.
- Channel integration: planned official Meta WhatsApp Business Cloud API connection.

## Intended message flow
1. Receive a customer message through a connected channel.
2. Authenticate and resolve the correct business workspace.
3. Load only that workspace's profile, active products, FAQs, instructions and conversation history.
4. Generate a grounded response.
5. Validate factual claims against the business context.
6. Escalate if the customer requests a person, the case is sensitive or confidence is low.
7. Otherwise send the response and update supported customer/lead records.

## Status
The Base44 app and six schemas (Business, BusinessMembership, Customer, Lead, Product, User) were confirmed. The catalogue and WhatsApp Inbox were reported by the builder earlier. The latest AI Sales Agent build attempt returned an error, so the agent playground and complete agent behavior are not represented as finished. Official live WhatsApp integration is unverified.

## Security requirements
- Enforce authorization server-side for every private CRM operation.
- Scope every read, write, search and AI context to the active business.
- Never trust a client-supplied business ID without checking membership.
- Keep integration credentials in server-side secrets.
- Validate and deduplicate inbound webhook events.
- Log failures without exposing credentials or unnecessary personal data.
- Provide explicit human handoff and an auditable escalation reason.