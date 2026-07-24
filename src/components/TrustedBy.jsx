const logos = [
  { name: 'Anthropic', src: '/logos/anthropic.png', width: 120 },
  { name: 'Google', src: '/logos/google.png', width: 100 },
  { name: 'WeWork', src: '/logos/wework.png', width: 120 },
  { name: 'Parallel AI', src: '/logos/parallel-ai.png', width: 140 },
  { name: 'Wati', src: '/logos/wati.png', width: 100 },
  { name: 'Emergent', src: '/logos/emergent.png', width: 140 },
  { name: 'Blinkit', src: '/logos/blinkit.png', width: 90 },
  { name: 'Cred', src: '/logos/cred.png', width: 100 },
  { name: 'Composio', src: '/logos/composio.png', width: 140 },
  { name: 'Skydo', src: '/logos/skydo.png', width: 100 },
];

function TrustedBy() {
  // Duplicate logos for seamless infinite scroll
  const tickerLogos = [...logos, ...logos];

  return (
    <section className="trusted-by">
      <p className="trusted-by-label">TRUSTED BY FOLKS AT</p>
      <div className="trusted-by-ticker">
        <ul className="trusted-by-track">
          {tickerLogos.map((logo, index) => (
            <li key={`${logo.name}-${index}`} className="trusted-by-item">
              <img
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustedBy;
