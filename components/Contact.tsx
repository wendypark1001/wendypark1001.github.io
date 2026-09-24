import { Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:wendy.park1001@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#F5F1E8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          CONTACT
        </h2>
        <div className="mb-12" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:wendy.park1001@gmail.com"
                    className="font-serif underline decoration-[#C4A57B] decoration-2"
                  >
                    wendy.park1001@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/wendy-park-47b563267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif underline decoration-[#C4A57B] decoration-2"
                  >
                    www.linkedin.com/in/wendy-park-47b563267
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Location</p>
                  <p className="font-serif">Melbourne, Victoria, Australia</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              <h4 className="font-serif italic mb-3">Strengths</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Community Engagement & Events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Social Media Content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Graphic Design & Visual Identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Brand Marketing & Campaigns</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8">
            <h3 className="font-serif italic text-xl mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-black bg-[#F5F1E8] text-sm"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-black bg-[#F5F1E8] text-sm"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Enter your message. Clicking ‘Send Message’ below will open your email client to complete and send the email."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="border-black bg-[#F5F1E8] text-sm"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black border border-black hover:bg-neutral-100">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
