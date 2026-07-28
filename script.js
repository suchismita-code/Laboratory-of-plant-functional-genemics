/**
 * ============================================================================
 * Kamal Kishore - Personal Academic Website Script
 * Integrated with Kindi Palette Design System & Interactive Contact Form
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. NEWS & EVENTS DATA
     ========================================================================== */
  const newsData = [
    {
      id: 1,
      date: 'July 15, 2026',
      badge: 'Paper Accepted',
      title: 'Research Paper Accepted at IEEE Transactions on Instrumentation and Measurement',
      description: 'Our latest research on "Edge-Assisted Intelligent Signal Analysis for IoT Sensing Networks" has been accepted for publication.',
      link: '#publications-patents'
    },
    {
      id: 2,
      date: 'May 28, 2026',
      badge: 'Patent Filed',
      title: 'Patent Application Submitted for Smart Industrial Sensor System',
      description: 'Filed Indian Patent for an automated multi-spectral signal acquisition apparatus developed at XYZ Institute of Technology.',
      link: '#publications-patents'
    },
    {
      id: 3,
      date: 'March 10, 2026',
      badge: 'Conference',
      title: 'Oral Presentation at International IEEE Sensors Conference',
      description: 'Kamal Kishore presented key findings on real-time signal processing architectures for high-speed sensor streams.',
      link: '#gallery'
    },
    {
      id: 4,
      date: 'January 20, 2026',
      badge: 'Award',
      title: 'Best Research Poster Award at Annual Science Symposium',
      description: 'Honored with the Best Poster Presentation award for innovative IoT sensor signal filtering algorithms in Greater Noida.',
      link: '#gallery'
    }
  ];

  /* ==========================================================================
     2. PUBLICATIONS DATA
     ========================================================================== */
  const publicationsData = [
    {
      id: 'pub-1',
      title: 'Edge-Assisted Intelligent Signal Analysis for Low-Power IoT Sensing Networks',
      authors: 'Kamal Kishore, Prof. R. K. Sharma, Dr. A. V. Gupta',
      venue: 'IEEE Transactions on Instrumentation and Measurement',
      year: 2026,
      type: 'Journal',
      doi: '10.1109/TIM.2026.1029384',
      pdfUrl: '#',
      codeUrl: '#',
      abstract: 'This paper presents an energy-efficient edge processing algorithm designed for ultra-low latency sensor data stream filtering in resource-constrained IoT systems.'
    },
    {
      id: 'pub-2',
      title: 'Adaptive Multi-Spectral Signal Denoising via Deep Lightweight Neural Architectures',
      authors: 'Kamal Kishore, S. Verma, Prof. R. K. Sharma',
      venue: 'Elsevier Signal Processing Journal',
      year: 2025,
      type: 'Journal',
      doi: '10.1016/j.sigpro.2025.08.012',
      pdfUrl: '#',
      codeUrl: '#',
      abstract: 'Introduces a lightweight spatial-temporal neural framework for real-time sensor noise reduction operating under harsh industrial electromagnetic environments.'
    },
    {
      id: 'pub-3',
      title: 'Compact Wireless Sensor Node for Real-Time Industrial Vibration Monitoring',
      authors: 'Kamal Kishore, M. Singh, Dr. A. V. Gupta',
      venue: 'IEEE International Conference on Sensors & Cyber-Physical Systems',
      year: 2025,
      type: 'Conference',
      doi: '10.1109/CPS.2025.49201',
      pdfUrl: '#',
      codeUrl: '#',
      abstract: 'Proposes a novelty hardware-software co-design for micro-vibration telemetry equipped with sub-millisecond edge alert processing.'
    },
    {
      id: 'pub-4',
      title: 'Comparative Performance Analysis of FFT vs Wavelet Filters on Microcontroller Platforms',
      authors: 'Kamal Kishore, Prof. R. K. Sharma',
      venue: 'National Conference on Advanced Electronics & Signal Processing (NCAESP)',
      year: 2024,
      type: 'Conference',
      doi: '10.1007/s978-981-19-1234-5_10',
      pdfUrl: '#',
      codeUrl: '#',
      abstract: 'A comprehensive benchmark evaluating RAM usage, CPU clock cycles, and spectral resolution across ARM Cortex-M microcontrollers.'
    }
  ];

  /* ==========================================================================
     3. PATENTS DATA
     ========================================================================== */
  const patentsData = [
    {
      id: 'pat-1',
      title: 'Automated Multi-Spectral Signal Acquisition Apparatus for Distributed Sensing',
      inventors: 'Kamal Kishore, Prof. R. K. Sharma',
      patentNumber: 'IN App. No. 202651094821 A',
      status: 'Pending',
      year: 2026,
      jurisdiction: 'Indian Patent Office (IPO)',
      abstract: 'A hardware apparatus enabling simultaneous multi-channel analog signal digitizing with integrated adaptive calibration circuits.'
    },
    {
      id: 'pat-2',
      title: 'System and Method for Ultra-Low Power Sensor Fault Diagnostics at the Edge',
      inventors: 'Prof. R. K. Sharma, Kamal Kishore, Dr. A. V. Gupta',
      patentNumber: 'IN Patent No. 492018',
      status: 'Granted',
      year: 2025,
      jurisdiction: 'Indian Patent Office (IPO)',
      abstract: 'An automated diagnostic system that detects sensor calibration drift and physical connection faults without requiring central server computation.'
    }
  ];

  /* ==========================================================================
     4. LAB MEMBERS DATA
     ========================================================================== */
  const membersData = [
    {
      id: 'mem-1',
      name: 'Dr. Ramu S. vemanna',
      role: 'Principal Investigator',
      researchArea: 'Ribosome Biogenesis ',
      image: 'assets/images/members/kamal-kishore.svg',
      email: 'kamal.kishore@xyztech.ac.in',
      scholar: 'https://scholar.google.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      isLead: true
    },
    {
      id: 'mem-2',
      name: 'Shobhna Yadav',
      role: 'PhD Student',
      education: ' Masters in Botany from Delhi University',
      researchArea: 'Shobhna is trying to unravel the rRNA Processing for ribosome biogenesis required for the growth and development of plant.you always find her in lab trobleshooting her own experiments otherwise troubleshooting lab issues ',
      image: 'assets/images/members/shobhna.jpeg',
      email: 'siddharth.v@xyztech.ac.in',
      scholar: '#',
      linkedin: '#',
      github: '#',
      isLead: false
    },
    {
      id: 'mem-3',
      name: 'Libin Thomas',
      role: 'PhD Student',
      researchArea: 'Wireless Telemetry & Sensor Networks',
      image: 'assets/images/members/libin.jpg',
      email: 'meera.s@xyztech.ac.in',
      scholar: '#',
      linkedin: '#',
      github: '#',
      isLead: false
    },
    {
      id: 'mem-4',
      name: 'Manisha Yadav',
      role: 'PhD Student',
      education: ' Masters in Botany from Delhi University',
      researchArea: 'Manisha curently working on ribosome heterogenity,untangling the depth of RNA biology in plant stress response and development',
      image: 'assets/images/members/member-assistant-1.svg',
      email: 'ankit.k@xyztech.ac.in',
      scholar: '#',
      linkedin: '#',
      github: '#',
      isLead: false
    },
    {
      id: 'mem-5',
      name: 'Sathya Seelan',
      role: 'PhD Student',
      education: ' M.Sc.(Agri.) in Plant Biotechnology from University of Agricultural Sciences, Bangalore',
      researchArea: 'Sathya is working in direct seeded rice for agricultural climate change. you will find hime running some wet experiments otherwise running analysis for dry experiments ',
      image: 'assets/images/members/member-assistant-1.svg',
      email: 'ankit.k@xyztech.ac.in',
      scholar: '#',
      linkedin: '#',
      github: '#',
      isLead: false
    },
    {
      id: 'mem-6',
      name: 'Shubham Singh',
      role: 'PhD Student',
      education: ' Masters in Botany from Banaras Hindu University',
      researchArea: 'Shubham is studying the molecular mechanism underlying rice responses to biotic and abiotic stresses.you will find him driving some experiments or designing how to drive experiments ',
      image: 'assets/images/members/Shubham.jpeg',
      email: 'ankit.k@xyztech.ac.in',
      scholar: '#',
      linkedin: '#',
      github: '#',
      isLead: false
    }
  ];

  /* ==========================================================================
     5. ALUMNI DATA
     ========================================================================== */
  const alumniData = [
    {
      id: 'alum-1',
      name: 'Dr. Priya Sharma',
      priorRole: 'PhD Scholar (Graduated 2025)',
      period: '2021 – 2025',
      currentPos: 'Postdoctoral Fellow at National Institute of Technology',
      image: 'assets/images/members/alumni-1.svg',
      linkedin: '#'
    },
    {
      id: 'alum-2',
      name: 'Rohan Mehta',
      priorRole: 'MTech Scholar (Graduated 2024)',
      period: '2022 – 2024',
      currentPos: 'Senior Embedded Systems Engineer, Tech Global India',
      image: 'assets/images/members/alumni-2.svg',
      linkedin: '#'
    }
  ];

  /* ==========================================================================
     6. GALLERY DATA
     ========================================================================== */
  const galleryData = [
    {
      id: 1,
      title: 'Advanced Experimental Sensor Setup',
      category: 'Lab',
      image: 'assets/images/gallery/lab-1.svg',
      description: 'Testing high-frequency signal acquisition apparatus in the research laboratory at XYZ Institute of Technology.',
      date: 'June 2026'
    },
    {
      id: 2,
      title: 'Data Analytics & ML Workstation',
      category: 'Lab',
      image: 'assets/images/gallery/lab-2.svg',
      description: 'Real-time spectral analysis and neural network training workstation in our research lab.',
      date: 'April 2026'
    },
    {
      id: 3,
      title: 'Keynote Oral Presentation at IEEE Conference',
      category: 'Conferences',
      image: 'assets/images/gallery/conf-1.svg',
      description: 'Kamal Kishore presenting research paper on intelligent sensor filtering algorithms.',
      date: 'March 2026'
    },
    {
      id: 4,
      title: 'Interactive Poster Session & Peer Discussions',
      category: 'Conferences',
      image: 'assets/images/gallery/conf-2.svg',
      description: 'Engaging with visiting scholars and industry experts during the annual IEEE symposium poster session.',
      date: 'January 2026'
    },
    {
      id: 5,
      title: 'Hands-on IoT Hardware & Microcontroller Workshop',
      category: 'Workshops',
      image: 'assets/images/gallery/workshop-1.svg',
      description: 'Demonstrating edge sensor interfacing to undergraduate research scholars in Greater Noida.',
      date: 'November 2025'
    },
    {
      id: 6,
      title: 'Lab Research Brainstorming & Whiteboard Strategy',
      category: 'Workshops',
      image: 'assets/images/gallery/workshop-2.svg',
      description: 'Collaborative team session discussing neural network architectural pruning for embedded nodes.',
      date: 'September 2025'
    }
  ];

  /* ==========================================================================
     RENDER FUNCTIONS
     ========================================================================== */

  // 1. Render News
  function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    container.innerHTML = newsData.map(item => `
      <div class="col-md-6 mb-4">
        <div class="academic-card news-card p-4 h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="news-date-badge"><i class="bi bi-calendar3 me-1"></i>${item.date}</span>
              <span class="badge bg-light text-dark border">${item.badge}</span>
            </div>
            <h5 class="fw-bold mb-2">${item.title}</h5>
            <p class="text-muted small mb-3">${item.description}</p>
          </div>
          <div>
            <a href="${item.link}" class="btn btn-sm btn-outline-primary rounded-pill">
              Learn More <i class="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 2. Render Publications
  function renderPublications(filterQuery = '') {
    const container = document.getElementById('publications-container');
    if (!container) return;

    const filtered = publicationsData.filter(pub => {
      const q = filterQuery.toLowerCase();
      return pub.title.toLowerCase().includes(q) ||
             pub.authors.toLowerCase().includes(q) ||
             pub.venue.toLowerCase().includes(q) ||
             pub.year.toString().includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-4">
          <p class="text-muted fs-5"><i class="bi bi-search me-2"></i>No publications found matching "${filterQuery}".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(pub => {
      const highlightedAuthors = pub.authors.replace(
        /Kamal Kishore/g,
        '<span class="author-highlight">Kamal Kishore</span>'
      );

      const badgeClass = pub.type === 'Journal' ? 'badge-journal' : 'badge-conference';

      return `
        <div class="col-12 mb-3">
          <div class="academic-card p-4">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <span class="publication-badge ${badgeClass}">
                <i class="bi ${pub.type === 'Journal' ? 'bi-journal-bookmark-fill' : 'bi-people-fill'} me-1"></i>${pub.type} (${pub.year})
              </span>
              <span class="text-muted small">DOI: <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener" class="text-decoration-none text-primary">${pub.doi}</a></span>
            </div>
            <h5 class="fw-bold mb-2 text-dark">${pub.title}</h5>
            <p class="mb-2 text-secondary small">${highlightedAuthors}</p>
            <p class="mb-2 fst-italic text-muted small"><i class="bi bi-building me-1"></i>${pub.venue}</p>
            <p class="text-muted small mb-3">${pub.abstract}</p>
            <div class="d-flex flex-wrap gap-2">
              <a href="${pub.pdfUrl}" class="btn btn-sm btn-primary rounded-pill px-3">
                <i class="bi bi-file-earmark-pdf me-1"></i>PDF Paper
              </a>
              <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary rounded-pill px-3">
                <i class="bi bi-link-45deg me-1"></i>Publisher DOI
              </a>
              <a href="${pub.codeUrl}" class="btn btn-sm btn-outline-dark rounded-pill px-3">
                <i class="bi bi-code-slash me-1"></i>Code &amp; Dataset
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Render Patents
  function renderPatents() {
    const container = document.getElementById('patents-container');
    if (!container) return;

    container.innerHTML = patentsData.map(pat => {
      const badgeClass = pat.status === 'Granted' ? 'badge-patent-granted' : 'badge-patent-pending';
      const statusIcon = pat.status === 'Granted' ? 'bi-check-circle-fill' : 'bi-clock-history';
      const highlightedInventors = pat.inventors.replace(
        /Kamal Kishore/g,
        '<span class="author-highlight">Kamal Kishore</span>'
      );

      return `
        <div class="col-md-6 mb-4">
          <div class="academic-card p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex align-items-center justify-content-between mb-2">
                <span class="publication-badge ${badgeClass}">
                  <i class="bi ${statusIcon} me-1"></i>Patent ${pat.status} (${pat.year})
                </span>
                <span class="text-muted small">${pat.jurisdiction}</span>
              </div>
              <h5 class="fw-bold mb-2">${pat.title}</h5>
              <p class="text-muted small mb-2"><strong>Inventors:</strong> ${highlightedInventors}</p>
              <p class="text-primary fw-bold small mb-2"><i class="bi bi-shield-check me-1"></i>${pat.patentNumber}</p>
              <p class="text-muted small mb-3">${pat.abstract}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 4. Render Lab Members
  function renderMembers() {
    const container = document.getElementById('members-container');
    if (!container) return;

    container.innerHTML = membersData.map(mem => {
      const isLead = mem.isLead;
      const cardClass = isLead ? 'academic-card featured-member-card p-4 text-center h-100' : 'academic-card p-4 text-center h-100';

      return `
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="${cardClass}">
            ${isLead ? '<span class="lead-badge"><i class="bi bi-star-fill me-1"></i>Lead Researcher</span>' : ''}
            <img src="${mem.image}" alt="${mem.name} - ${mem.role}" class="member-avatar ${isLead ? 'mt-2' : ''}">
            <h5 class="fw-bold mb-1">${mem.name}</h5>
            <p class="text-primary fw-semibold small mb-2">${mem.role}</p>
            <p class="text-muted small mb-2">${mem.researchArea}</p>
            ${mem.education ? `<p class="text-muted small mb-3"><strong>Education:</strong> ${mem.education}</p>` : ''}
            <div class="d-flex justify-content-center gap-2">
              <a href="mailto:${mem.email}" class="btn btn-sm btn-outline-secondary rounded-circle" title="Email"><i class="bi bi-envelope"></i></a>
              <a href="${mem.scholar}" class="btn btn-sm btn-outline-primary rounded-circle" title="Google Scholar"><i class="bi bi-mortarboard-fill"></i></a>
              <a href="${mem.linkedin}" class="btn btn-sm btn-outline-primary rounded-circle" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="${mem.github}" class="btn btn-sm btn-outline-dark rounded-circle" title="GitHub"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 5. Render Alumni
  function renderAlumni() {
    const container = document.getElementById('alumni-container');
    if (!container) return;

    container.innerHTML = alumniData.map(alum => `
      <div class="col-md-6 mb-4">
        <div class="academic-card p-4 d-flex align-items-center gap-3">
          <img src="${alum.image}" alt="${alum.name}" class="rounded-circle border border-2 border-primary" style="width: 75px; height: 75px; object-fit: cover;">
          <div>
            <h5 class="fw-bold mb-1">${alum.name}</h5>
            <p class="text-primary small mb-1"><strong>Former:</strong> ${alum.priorRole} (${alum.period})</p>
            <p class="text-muted small mb-0"><i class="bi bi-briefcase me-1"></i>${alum.currentPos}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 6. Render Gallery
  function renderGallery(filterCategory = 'All') {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    const filtered = filterCategory === 'All' 
      ? galleryData 
      : galleryData.filter(item => item.category === filterCategory);

    container.innerHTML = filtered.map(item => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="gallery-item academic-card" data-bs-toggle="modal" data-bs-target="#galleryModal" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="img-fluid">
          <div class="gallery-overlay">
            <span class="badge bg-warning text-dark mb-1 align-self-start fw-bold">${item.category}</span>
            <h6 class="text-white fw-bold mb-1">${item.title}</h6>
            <p class="text-white-50 small mb-0"><i class="bi bi-calendar-event me-1"></i>${item.date}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to open lightbox modal
    document.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-id'), 10);
        const item = galleryData.find(g => g.id === id);
        if (item) {
          const modalImg = document.getElementById('modalImage');
          const modalTitle = document.getElementById('galleryModalLabel');
          const modalDesc = document.getElementById('modalDescription');
          const modalDate = document.getElementById('modalDate');
          const modalCat = document.getElementById('modalCategory');

          if (modalImg) modalImg.src = item.image;
          if (modalTitle) modalTitle.textContent = item.title;
          if (modalDesc) modalDesc.textContent = item.description;
          if (modalDate) modalDate.textContent = item.date;
          if (modalCat) modalCat.textContent = item.category;
        }
      });
    });
  }

  /* ==========================================================================
     CONTACT FORM SUBMISSION HANDLER
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const feedbackContainer = document.getElementById('contact-feedback');

  if (contactForm && submitBtn && feedbackContainer) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      contactForm.classList.add('was-validated');

      // Extract form values
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value;

      // Button Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending Message...`;

      // Simulate asynchronous API dispatch
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="bi bi-send-fill me-2"></i>Send Message to Kamal Kishore`;

        // Display Success Alert Banner
        feedbackContainer.classList.remove('d-none');
        feedbackContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show rounded-3 shadow-sm border-0 mb-0" role="alert" style="background-color: #CDEFE5; color: #006b54;">
            <i class="bi bi-check-circle-fill me-2 fs-5"></i>
            <strong>Thank you, ${name}!</strong> Your message regarding "<em>${subject}</em>" has been submitted successfully. Kamal Kishore will reply to your email (<code>${email}</code>) shortly.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;

        // Reset form
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // Scroll feedback banner into view smoothly
        feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1000);
    });
  }

  /* ==========================================================================
     INITIALIZATION & LISTENERS
     ========================================================================== */

  renderNews();
  renderPublications();
  renderPatents();
  renderMembers();
  renderAlumni();
  renderGallery('All');

  // Search Filter
  const searchInput = document.getElementById('publication-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderPublications(e.target.value);
    });
  }

  // Gallery Filter Pills
  const filterPills = document.querySelectorAll('#gallery-filters button');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  // Mobile Navbar Auto Collapse
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // Back to Top
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
