const Heros = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6">
            <h1 className="fw-bold text-primary">
              Talk to a Doctor <br /> Anytime, Anywhere
            </h1>
            <p className="text-muted">Your trusted health companion</p>
            <button className="btn btn-success px-4">Consult Now</button>
          </div>

          <div className="col-md-6 text-center">
          <img src="https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg" srcSet="https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?t=st=1770008127~exp=1770011727~hmac=33bd107a6ad611b3ec46fbdd075a60fcfab84490a6a6673de227ae7c3af79301&amp;w=360 360w, https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?t=st=1770008127~exp=1770011727~hmac=33bd107a6ad611b3ec46fbdd075a60fcfab84490a6a6673de227ae7c3af79301&amp;w=740 740w, https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?t=st=1770008127~exp=1770011727~hmac=33bd107a6ad611b3ec46fbdd075a60fcfab84490a6a6673de227ae7c3af79301&amp;w=1060 1060w, https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?t=st=1770008127~exp=1770011727~hmac=33bd107a6ad611b3ec46fbdd075a60fcfab84490a6a6673de227ae7c3af79301&amp;w=1480 1480w, https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?t=st=1770008127~exp=1770011727~hmac=33bd107a6ad611b3ec46fbdd075a60fcfab84490a6a6673de227ae7c3af79301&amp;w=2000 2000w" width="626" height="365" alt="online doctor consultation illustration" fetchPriority="high" sizes="(max-width: 480px) 100vw, (min-aspect-ratio: 626/365) 100%, (max-width: 1024px) calc(100vw - 40px), calc(100vw - 540px)" className="size-full object-contain sm:rounded-xl"></img>
          </div>
        </div>
      </div>

      {/* SVG Wave */}
      <svg className="wave" viewBox="0 0 1440 320">
        <path
          fill="#eaf6ff"
          d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,170.7C672,181,768,171,864,154.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L0,0Z"
        />
      </svg>
    </section>
  );
};

export default Heros;
