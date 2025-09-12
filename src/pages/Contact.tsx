const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Ready to revolutionize your business with cutting-edge AI technology? Let's connect.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <h3 className="text-2xl font-medium mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <div>
                  <strong className="text-foreground/80">Email:</strong><br />
                  <a href="mailto:echo@sudarshana.ai" className="text-yellow-400 hover:underline">echo@sudarshana.ai</a>
                </div>
                <div>
                  <strong className="text-foreground/80">Address:</strong><br />
                  Bengaluru, KA<br />
                  INDIA
                </div>
              </div>
            </div>
            
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <h3 className="text-2xl font-medium mb-6 text-foreground">Business Hours</h3>
              <div className="space-y-3 text-foreground/70 font-light">
                <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                <div>Saturday: 10:00 AM - 4:00 PM PST</div>
                <div>Sunday: Closed</div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/80">
                <h4 className="font-medium text-foreground/80 mb-2">Response Time</h4>
                <p className="text-foreground/70 font-light">We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;