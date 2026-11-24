# SalesPilot AI — Data model

The project record confirms six Base44 schemas:

- **Business:** a business workspace and its profile/settings.
- **BusinessMembership:** associates users with a business and workspace role.
- **Customer:** customer information scoped to a business.
- **Lead:** a sales opportunity/enquiry scoped to a business.
- **Product:** a business's product or service catalogue entry.
- **User:** an application user identity.

## Tenant relationships
Customer, Lead and Product records are associated with a business through a business_id field. BusinessMembership provides the relationship between a user and a workspace.

The documented role direction includes OWNER, ADMIN and SALES_REP. Exact permission enforcement must be checked in the live app; role names alone do not prove all authorization rules are implemented.

## Representative Product fields
The documented Product schema pattern includes business_id, members, name, kind (product or service), sku, category, price, unit, track_stock, stock_quantity, description, status (active or archived) and image_url.

## Representative Lead fields
The documented Lead creation pattern includes business_id, members, name, phone, stage and notes.

An example lead-stage direction is new → initial_contact → qualified → negotiation → closed, with a lost outcome available from earlier stages. Validate allowed transitions in the actual app before relying on this model.

## Data isolation
Every operation involving customers, leads, products, conversations or AI knowledge must be scoped to the authenticated user's authorized business. A client-provided business_id is not sufficient proof of access.

This document describes the recorded schema and intended relationships; it is not a live schema export.