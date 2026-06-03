export const whatsappBookingNumber = "447883050603";

export function buildWhatsAppBookingLink(serviceName: string) {
  const message = `Hi J Luxe Medical Aesthetics, I would like to book ${serviceName}. Please can you help me with availability and the next steps?`;
  return `https://wa.me/${whatsappBookingNumber}?text=${encodeURIComponent(message)}`;
}
