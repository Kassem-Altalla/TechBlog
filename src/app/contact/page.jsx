import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback,
            or a collaboration proposal, our team is ready to answer all your
            questions.
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="Question about an article" />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  label="Your Message"
                  placeholder="Write your thoughts here..."
                  helperText="Max 500 characters"
                  rows={5}
                />
              </div>

              {/* Submit */}
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <ContactInfo
                icon={Mail}
                title="Email"
                description="contact@techpulse.io"
                link="mailto:contact@techpulse.io"
                linkLabel="Send an email"
              />

              {/* Phone */}
              <ContactInfo
                icon={Phone}
                title="Phone"
                description="Mon-Fri from 9am to 5pm."
                link="tel:+1234567890"
                linkLabel="+1 (234) 567-890"
              />

              {/* Address */}
              <ContactInfo
                icon={MapPin}
                title="Office Location"
                description={
                  <>
                    <p>123 Tech Avenue</p>
                    <p>Innovation City, TX 75001</p>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
