const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Ready to revolutionize your business with cutting-edge AI technology? Let's connect.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get in Touch</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-card-foreground">Email:</strong><br />
                contact@sudarshana.ai
              </div>
              <div>
                <strong className="text-card-foreground">Phone:</strong><br />
                +1 (555) 123-4567
              </div>
              <div>
                <strong className="text-card-foreground">Address:</strong><br />
                Silicon Valley, CA<br />
                United States
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
              <div>Saturday: 10:00 AM - 4:00 PM PST</div>
              <div>Sunday: Closed</div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-card-foreground mb-2">Response Time</h4>
              <p className="text-muted-foreground">We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;