import React, { useState } from 'react';
import { Mail, MapPin, Phone, Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Limit file size to ~800KB to fit in Firestore document
      if (selectedFile.size > 800000) {
        setError('File is too large. Please upload a file smaller than 800KB.');
        setFile(null);
      } else {
        setFile(selectedFile);
        setError('');
      }
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        // Extract just the base64 data part
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.requirements) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      let fileData = '';
      let fileType = '';
      let fileName = '';

      if (file) {
        fileData = await convertFileToBase64(file);
        fileType = file.type || 'application/octet-stream';
        fileName = file.name;
      }

      let locationStr = '';
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.city && data.country_name) {
          locationStr = `${data.city}, ${data.region ? data.region + ', ' : ''}${data.country_name}`;
        }
      } catch (e) {
        console.log('Could not fetch location');
      }

      const quoteData: any = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        requirements: formData.requirements,
        status: 'new',
        createdAt: serverTimestamp()
      };

      if (locationStr) {
        quoteData.location = locationStr;
      }

      if (file) {
        quoteData.fileName = fileName;
        quoteData.fileData = fileData;
        quoteData.fileType = fileType;
      }

      await addDoc(collection(db, 'quotes'), quoteData);

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', requirements: '' });
      setFile(null);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error("Error submitting quote:", err);
      setError('Failed to submit quote. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 sm:p-16 lg:p-20">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Start Your Production Today
              </h2>
              <p className="text-lg text-zinc-300 mb-10">
                Don't let manufacturing bottlenecks slow you down. Send your drawings now and get a comprehensive technical quote within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-zinc-900 font-bold">
                    1
                  </div>
                  <p className="text-white font-medium">Get a quote in 24 hours</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Email Drawings (3D Models/PDF/STEP/IGES)</p>
                    <a href="mailto:sugunaengineeringworks2007@gmail.com" className="text-lg font-medium text-white hover:text-yellow-400 transition-colors break-all">
                      sugunaengineeringworks2007@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Direct Technical Support</p>
                    <div className="flex items-center gap-3 mt-1">
                      <a href="tel:+918500319532" className="text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                        +91 8500319532
                      </a>
                      <a 
                        href={`https://wa.me/918500319532?text=${encodeURIComponent("Hi Suguna Engineering Works, I would like to inquire about your services.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1 rounded-full transition-colors"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">Request a Fast Quote</h3>
              <p className="text-zinc-400 text-sm mb-6">Fill the form below and upload your drawings.</p>
              
              {isSuccess ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Quote Request Sent!</h4>
                  <p className="text-zinc-300 text-sm">We have received your requirements and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-md">{error}</div>}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        placeholder="you@company.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        placeholder="+91..." 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-zinc-300 mb-1">Project Requirements *</label>
                    <textarea 
                      id="details" 
                      required
                      rows={3} 
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                      placeholder="Material, quantity, tolerances (e.g. ±0.01 mm)..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Upload Drawing (3D Models, PDF, STEP, IGES)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-700 border-dashed rounded-md hover:border-yellow-500/50 transition-colors bg-zinc-900/50">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-8 w-8 text-zinc-500" />
                        <div className="flex text-sm text-zinc-400 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-yellow-500 hover:text-yellow-400 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.step,.stp,.iges,.igs,.dwg,.dxf" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-zinc-500">
                          {file ? <span className="text-yellow-400 font-medium">{file.name}</span> : "3D Models, PDF, CAD files up to 800KB"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-zinc-900 font-bold py-4 px-4 rounded-md hover:bg-yellow-500 transition-colors mt-2 shadow-lg shadow-yellow-400/20 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                    ) : (
                      <>Upload Drawing &rarr; Get Quote in 24 Hours</>
                    )}
                  </button>
                  <p className="text-xs text-zinc-500 text-center mt-4 italic">
                    * We sign NDAs for sensitive defense and aerospace projects.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
