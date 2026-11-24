/**
 * SalesPilot AI — Base44 SDK reference patterns.
 * Reconstructed from project documentation, not deployed app source.
 * Confirm SDK version, permissions and method signatures in Base44.
 */

// Query active products for the authenticated business.
const products = await base44.entities.Product.filter(
  { business_id: activeBusinessId, status: "active" },
  "name",
  100,
  0
);

// Create a lead from an enquiry.
const newLead = await base44.entities.Lead.create({
  business_id: activeBusinessId,
  members: [user.id],
  name: customerName,
  phone: customerPhone,
  stage: "new",
  notes: "Enquired about a product"
});

// Update a lead after a qualified interaction.
await base44.entities.Lead.update(newLead.id, {
  stage: "qualified"
});

// Security reminder: resolve activeBusinessId through the authenticated
// user's BusinessMembership on the trusted server side. Never trust a
// business_id supplied by the browser alone.
