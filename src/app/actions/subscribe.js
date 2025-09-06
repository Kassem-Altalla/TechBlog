// app/actions/subscribe.ts
"use server";

export async function subscribe(prevState, formData) {
  const email = formData.get("email")?.toString();

  if (!email || !email.includes("@")) {
    return { success: false, message: "❌ Please enter a valid email" };
  }

  // ✨ منطق الاشتراك (قاعدة بيانات / خدمة Mailchimp مثلاً)
  console.log("📩 New subscription:", email);

  return { success: true, message: "✅ Subscription successful!" };
}
