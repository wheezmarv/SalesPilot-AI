# SalesPilot AI

A WhatsApp-first CRM and sales automation application designed for small and medium-sized businesses, with a planned AI sales assistant grounded in each business's approved information.

## Overview
SalesPilot AI is intended to help businesses organise workspaces, customers, leads, products and services, and customer conversations. The AI sales-agent direction includes answering product questions, qualifying enquiries, capturing leads and escalating cases that require a human.

## Platform and technology
- Base44 application platform and SDK
- Base44 authentication and entity/data model
- JavaScript SDK reference patterns
- Base44 AI agent/conversation capabilities (implementation still being verified)
- Planned Meta WhatsApp Business Cloud API integration

React/Next.js, TypeScript and PostgreSQL appeared in original architecture exploration; they are not confirmed as the deployed stack.

## Recorded status
**Verified in project record:** Base44 application exists; six schemas were confirmed: Business, BusinessMembership, Customer, Lead, Product and User.

**Previously reported by builder:** Products & Services catalogue and WhatsApp Inbox.

**Not yet verified:** Latest AI Sales Agent build attempt returned an error; successful completion is not confirmed. Official live WhatsApp Cloud API connection is not confirmed. Full role authorization, tenant isolation and end-to-end tests still require verification.

## Intended capabilities
- Multi-business workspaces and membership roles
- Customer and lead management
- Product and service catalogue
- WhatsApp conversation inbox
- AI sales assistant using business-specific catalogue, FAQs and instructions
- Lead capture, follow-up workflows and human handoff

## Documentation
- docs/architecture.md
- docs/data-model.md
- docs/agent-flow.md
- examples/base44-sdk-patterns.js

## Source-code note
This repository contains project documentation and representative SDK/reference patterns based on available project records. It is not a complete export of the deployed Base44 application's frontend or backend source. Direct file-level source inspection was unavailable in the recorded build environment. Confirm exact SDK method signatures and compare examples with the live Base44 app before reuse.

## Next milestone
Resolve the AI Sales Agent build error, then verify the playground, business knowledge grounding, tenant isolation and escalation behavior. Complete and test official WhatsApp Cloud API integration after that milestone.