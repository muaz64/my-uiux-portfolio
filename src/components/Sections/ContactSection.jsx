import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../Utilities/SectionTitle';

const ContactSection = ({ data }) => (
  <section id="contact" className="py-20 bg-slate-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Contact Me" subtitle="Let's build something amazing together" />
      <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white mb-12">
              <div className="bg-slate-700 p-6 rounded-lg">
                  <MapPin className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-gray-400">{data.location}</p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg">
                  <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-cyan-400 break-all">{data.email}</a>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg">
                  <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-400">{data.phone}</p>
              </div>
          </div>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300">
                Send Message
              </button>
            </div>
          </form>
      </div>
    </div>
  </section>
);

export default ContactSection;