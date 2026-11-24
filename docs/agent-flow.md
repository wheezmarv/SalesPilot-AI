# SalesPilot AI — AI sales-agent flow

## Intended responsibilities
- Answer questions using the current business's approved profile, catalogue, FAQs and instructions.
- Recommend active products/services that fit customer needs.
- Ask useful qualification questions.
- Capture lead details only when appropriately supplied or requested.
- Suggest next steps and follow-ups through approved workflows.
- Escalate matters that require a human.

## Grounding rules
1. Use only information belonging to the active business workspace.
2. Do not invent prices, stock, delivery dates, discounts, payment status, bookings or policies.
3. If information is missing, say so and ask a clarifying question or offer human help.
4. Validate product and policy claims against loaded business context before sending.

## Handoff rules
Escalate explicit human requests, complaints, refunds, disputes, sensitive issues, unclear business policy and low-confidence answers. Do not claim an order, payment or booking is confirmed without system evidence.

## Reference decision flow
    message = receive_customer_message()
    workspace = authenticate_and_resolve_business(message.channel)
    assert user_or_channel_is_authorized(workspace)

    context = {
      business: load_business_profile(workspace),
      catalogue: load_active_products(workspace),
      knowledge: load_business_faqs_and_instructions(workspace),
      history: load_conversation_history(workspace, message.conversation_id)
    }

    draft = agent.respond(message.text, context)

    if explicit_human_request(message) or sensitive_case(message) or low_confidence(draft):
        create_handoff(workspace, message.conversation_id, reason)
    else:
        validate_claims_against_context(draft, context)
        send_reply(draft)

This is reference logic for the intended product, not a verbatim extraction of deployed Base44 source.

## Verification checklist
- Owner can open a playground and test the agent.
- Agent answers from the active business's catalogue.
- Agent does not invent missing prices or policies.
- One business cannot access another business's products, customers or conversations.
- Human requests, complaints and low-confidence cases trigger handoff.
- Playground sessions remain separate from real customer conversations.
- The interface clearly indicates whether knowledge sources are connected or empty.

## Current status
The latest AI Sales Agent build attempt returned an error and is not verified complete. Resolve that build error and test grounding, tenant isolation and escalation before completing live WhatsApp integration.