import { Mail, Linkedin, MapPin } from "lucide-react";
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
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#F5F1E8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          LET'S WORK TOGETHER
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-12">
          Available for marketing projects, creative collaborations, and brand partnerships
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Email</p>
                  <p className="font-serif">wendy.park@student.unimelb.edu.au</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="font-serif">linkedin.com/in/wendy-park</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Location</p>
                  <p className="font-serif">Melbourne, Victoria, Australia</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              <h4 className="font-serif italic mb-3">Services</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Social Media Content & Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Graphic Design & Visual Identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Brand Marketing & Campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A57B]">→</span>
                  <span>Community Engagement & Events</span>
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
                  className="border-black bg-[#F5F1E8]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-black bg-[#F5F1E8]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="border-black bg-[#F5F1E8]"
                />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-neutral-800">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}