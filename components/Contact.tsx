export default function Contact() {
    return (
      <section id="contact" className="pl-16 pt-16 text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Contact</h2>
        <p className="max-w-xl mx-auto text-textSecondary">
          Interested in <span className='font-semibold text-black'>working together</span>? Feel free to <span className='font-semibold text-black'>reach out</span> to me!
        </p>
        <a href="mailto:work.larasn@gmail.com" className="mt-5 inline-block bg-primary text-black py-3 px-6 rounded-lg">
          Say Hello
        </a>
      </section>
    );
  }
  