import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE } from "./site-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `${SITE.currency} ${price.toLocaleString("en-BD")}`;
}

export function createProductWhatsAppUrl(
  productName: string,
  price: number,
  quantity: number = 1
): string {
  const message = `Hello Aviba Beauty Shop, I want to order:
Product: ${productName}
Price: ৳${price * quantity} (${SITE.currency}${price} x ${quantity})
Quantity: ${quantity}
Please confirm availability and delivery time. Thank you!`;

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function createCartWhatsAppUrl(
  items: Array<{ name: string; price: number; quantity: number }>,
  total: number,
  customerInfo?: { name?: string; phone?: string; address?: string; note?: string }
): string {
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.name} - ${item.quantity}x @ ৳${item.price} = ৳${
          item.price * item.quantity
        }`
    )
    .join("\n");

  let message = `Hello Aviba Beauty Shop, I would like to place an order:\n\n🛒 Order Items:\n${itemsText}\n\n💰 Total Amount: ৳${total}`;

  if (customerInfo?.name) {
    message += `\n\n👤 Customer Details:`;
    if (customerInfo.name) message += `\nName: ${customerInfo.name}`;
    if (customerInfo.phone) message += `\nPhone: ${customerInfo.phone}`;
    if (customerInfo.address) message += `\nDelivery Address: ${customerInfo.address}`;
    if (customerInfo.note) message += `\nNote: ${customerInfo.note}`;
  }

  message += `\n\nPlease confirm availability and payment/delivery instructions. Thank you!`;

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function createInquiryWhatsAppUrl(
  name: string,
  email: string,
  messageText: string
): string {
  const text = `Hello Aviba Beauty Shop,
I have an inquiry from the website:
Name: ${name}
Email: ${email}
Message: ${messageText}

Thank you!`;

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
