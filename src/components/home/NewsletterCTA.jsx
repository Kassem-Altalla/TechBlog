"use client";

import { useFormState } from "react-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subscribe } from "@/app/actions/subscribe";
import { useActionState } from "react";

export default function NewsletterCTA() {
  const [state, formAction] = useActionState(subscribe, {
    success: false,
    message: "",
  });

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-white">
          {/* Icon */}
          <Zap className="w-12 h-12 mx-auto mb-6 text-blue-200" />

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest technology insights delivered straight to your inbox.
            Join thousands of tech professionals who trust TechPulse.
          </p>

          {/* Form */}
          <form
            action={formAction}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <Button
              type="submit"
              className="bg-blue-500 text-gray-900 hover:text-blue-600 hover:bg-blue-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800"
            >
              Subscribe
            </Button>
          </form>

          {/* ✅ Notification */}
          {state.message && (
            <p
              className={`mt-4 text-sm font-medium ${
                state.success ? "text-green-300" : "text-red-300"
              }`}
            >
              {state.message}
            </p>
          )}

          {/* Note */}
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time. Privacy policy applies.
          </p>
        </div>
      </div>
    </section>
  );
}
