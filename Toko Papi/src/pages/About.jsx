function About() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-12 mt-5 mb-5">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Toko Papi berdiri pada tahun 2022, berlokasi di Perumahan Griya Mlati Indah, Desa
            Banjarmlati, Kecamatan Mojoroto, Kota Kediri. Nama &quot;Toko Papi&quot; diambil dari
            panggilan akrab warga setempat terhadap pendirinya, Bapak Hartojo, yang lebih dikenal
            dengan sebutan &quot;Papi&quot;. Toko ini menyediakan berbagai kebutuhan pokok, makanan,
            dan minuman dengan tujuan memberikan kenyamanan bagi pelanggan dalam memenuhi kebutuhan
            sehari-hari.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Toko Papi didirikan atas inisiatif Bapak Hartojo, yang ingin memiliki penghasilan yang
            stabil untuk menopang kehidupan keluarganya. Seiring berjalannya waktu, warung ini
            berkembang menjadi tempat yang tidak hanya memenuhi kebutuhan dasar, tetapi juga menjadi
            tempat berkumpul bagi masyarakat sekitar. Dengan jam operasional mulai pukul 08.00
            hingga pukul 02.00, Toko Papi senantiasa berkomitmen untuk memberikan pelayanan yang
            terbaik bagi setiap pengunjung.
          </p>
        </div>
        {/* Bagian Peta (Kanan) */}
        <div className="lg:w-1/2">
          <div className="h-96">
            <iframe
              className="w-full h-full rounded-lg border-0 mt-11"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2715.3255971920676!2d112.00130395375379!3d-7.835005779013045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78570068342515%3A0xbb686c2cf400ef2f!2sWarkop%20papi!5e0!3m2!1sid!2sid!4v1736411986759!5m2!1sid!2sid"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
