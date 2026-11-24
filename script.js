/* ============================================================
       DATA CATALOG & STATE (Backtick literals per defensive_js.md)
       ============================================================ */
    const USD_RATE = 302;

    const PRODUCTS = [
      {
        id: `w-dress-1`,
        gender: `women`,
        category: `Dresses`,
        badge: `Exclusive Capsule`,
        title: `Kandy Handloom Draped Trench Dress`,
        subtitle: `210 GSM Ceylon Cotton-Linen · True-Tone Dye`,
        description: `Architectural wrap-silhouette tailored from breathable 210 GSM Sri Lankan handloom cotton-linen. Designed for humid coastal evenings and formal Colombo occasions with unedited true-tone dye consistency.`,
        priceLkr: 14800,
        tier: `luxury`,
        modelInfo: `Model is 173 cm (5'8") wearing Size M`,
        fabric: { name: `Ceylon Handloom Cotton-Linen`, gsm: 210, breathability: `94%`, care: `Cold gentle wash` },
        fitVerdict: `Fits True to Size`,
        fitPosition: 51,
        fitDist: [11, 78, 11],
        reviewCount: 128,
        silhouette: `dress`,
        colors: [
          { name: `Obsidian Noir`, hex: `#1c1917`, sizes: { S: 4, M: 6, L: 3, XL: 2 } },
          { name: `Champagne Sand`, hex: `#c9b083`, sizes: { S: 2, M: 5, L: 0, XL: 1 } },
          { name: `Colombo Clay`, hex: `#9e5a47`, sizes: { S: 3, M: 4, L: 4, XL: 0 } }
        ]
      },
      {
        id: `w-blouse-1`,
        gender: `women`,
        category: `Blouses`,
        badge: `New Arrival`,
        title: `Cinnamon Gardens Silk-Cotton Tie Blouse`,
        subtitle: `145 GSM Fine Mulberry-Cotton · Tailored Cuff`,
        description: `Fluid bishop-sleeve blouse crafted in lightweight silk-cotton voile with mother-of-pearl closures and opaque double-layer front paneling.`,
        priceLkr: 7900,
        tier: `mid`,
        modelInfo: `Model is 169 cm (5'6") wearing Size S`,
        fabric: { name: `Silk-Cotton Voile`, gsm: 145, breathability: `97%`, care: `Hand wash cold` },
        fitVerdict: `Fits True to Size`,
        fitPosition: 49,
        fitDist: [14, 75, 11],
        reviewCount: 84,
        silhouette: `top`,
        colors: [
          { name: `Warm Ivory`, hex: `#f1ebe1`, sizes: { S: 7, M: 5, L: 2, XL: 2 } },
          { name: `Obsidian Noir`, hex: `#1f1c1a`, sizes: { S: 3, M: 6, L: 4, XL: 0 } },
          { name: `Sage Mist`, hex: `#7c8b78`, sizes: { S: 0, M: 3, L: 5, XL: 2 } }
        ]
      },
      {
        id: `w-skirt-1`,
        gender: `women`,
        category: `Skirts`,
        badge: `Trending`,
        title: `Galle Fort Bias-Cut Midi Skirt`,
        subtitle: `190 GSM Matte Cupro-Linen · Concealed Zip`,
        description: `Clean bias drape skirt engineered to skim without clinging in tropical humidity, finished with an elasticized back waist panel for adaptable comfort.`,
        priceLkr: 6200,
        tier: `under-6500`,
        modelInfo: `Model is 173 cm (5'8") wearing Size M`,
        fabric: { name: `Matte Cupro-Linen`, gsm: 190, breathability: `91%`, care: `Gentle machine wash` },
        fitVerdict: `Slightly Relaxed Waist`,
        fitPosition: 56,
        fitDist: [8, 72, 20],
        reviewCount: 63,
        silhouette: `skirt`,
        colors: [
          { name: `Champagne Sand`, hex: `#c9b083`, sizes: { S: 5, M: 8, L: 3, XL: 1 } },
          { name: `Obsidian Noir`, hex: `#1a1715`, sizes: { S: 4, M: 4, L: 2, XL: 2 } }
        ]
      },
      {
        id: `w-jacket-1`,
        gender: `women`,
        category: `Jackets`,
        badge: `Trending`,
        title: `Monsoon Atelier Cropped Gabardine Jacket`,
        subtitle: `280 GSM Water-Repellent Organic Twill`,
        description: `Structured minimalist outerwear built with breathable underarm gussets and a storm-flap collar for unpredictable Colombo monsoon evenings.`,
        priceLkr: 16500,
        tier: `luxury`,
        modelInfo: `Model is 175 cm (5'9") wearing Size M`,
        fabric: { name: `Organic Gabardine Twill`, gsm: 280, breathability: `84%`, care: `Spot clean / dry clean` },
        fitVerdict: `Fits True to Size`,
        fitPosition: 50,
        fitDist: [12, 77, 11],
        reviewCount: 52,
        silhouette: `jacket`,
        colors: [
          { name: `Obsidian Noir`, hex: `#171412`, sizes: { S: 3, M: 4, L: 3, XL: 1 } },
          { name: `Natural Stone`, hex: `#b3a693`, sizes: { S: 2, M: 3, L: 0, XL: 2 } }
        ]
      },
      {
        id: `m-shirt-1`,
        gender: `men`,
        category: `Shirts`,
        badge: `Exclusive Capsule`,
        title: `Kandy Loom Mandarin Collar Linen Shirt`,
        subtitle: `185 GSM Artisanal Handloom · Pre-Shrunk`,
        description: `Handwoven Central Province linen cut in a contemporary relaxed-tailored block. Pre-washed to eliminate shrinkage after your first wear.`,
        priceLkr: 8400,
        tier: `mid`,
        modelInfo: `Model is 182 cm (6'0") wearing Size L`,
        fabric: { name: `Handloom Pure Linen`, gsm: 185, breathability: `96%`, care: `Cold wash, line dry` },
        fitVerdict: `Fits True to Size`,
        fitPosition: 50,
        fitDist: [10, 81, 9],
        reviewCount: 142,
        silhouette: `shirt`,
        colors: [
          { name: `Warm Ivory`, hex: `#f1ebe1`, sizes: { S: 5, M: 7, L: 6, XL: 3 } },
          { name: `Deep Indigo`, hex: `#2a3b4c`, sizes: { S: 2, M: 5, L: 4, XL: 2 } },
          { name: `Obsidian Noir`, hex: `#1a1715`, sizes: { S: 4, M: 3, L: 0, XL: 2 } }
        ]
      },
      {
        id: `m-trouser-1`,
        gender: `men`,
        category: `Trousers`,
        badge: `Formal`,
        title: `Colombo 07 Pleated Tapered Trousers`,
        subtitle: `240 GSM Breathable Tropical Wool-Cotton`,
        description: `Single-pleat architectural trousers engineered for boardroom-to-gallery wear in warm climates with hidden side-tab waist adjusters.`,
        priceLkr: 10900,
        tier: `mid`,
        modelInfo: `Model is 182 cm (6'0") wearing Size L`,
        fabric: { name: `Tropical Wool-Cotton`, gsm: 240, breathability: `89%`, care: `Dry clean recommended` },
        fitVerdict: `Slightly Trim Thigh`,
        fitPosition: 45,
        fitDist: [22, 70, 8],
        reviewCount: 96,
        silhouette: `trousers`,
        colors: [
          { name: `Obsidian Noir`, hex: `#161412`, sizes: { S: 3, M: 6, L: 5, XL: 3 } },
          { name: `Taupe Stone`, hex: `#8c7d6b`, sizes: { S: 2, M: 4, L: 2, XL: 0 } }
        ]
      },
      {
        id: `m-tshirt-1`,
        gender: `men`,
        category: `T-Shirts`,
        badge: `Casual`,
        title: `Heavyweight Interlock Box Tee`,
        subtitle: `250 GSM Combed Organic Cotton · Matte Rib`,
        description: `Architectural boxy-fit crewneck tee with reinforced collar ribbing that holds crisp geometry wash after wash.`,
        priceLkr: 4800,
        tier: `under-6500`,
        modelInfo: `Model is 180 cm (5'11") wearing Size M`,
        fabric: { name: `Combed Interlock Cotton`, gsm: 250, breathability: `92%`, care: `Machine wash cold` },
        fitVerdict: `Boxy Relaxed Fit`,
        fitPosition: 58,
        fitDist: [6, 70, 24],
        reviewCount: 210,
        silhouette: `tshirt`,
        colors: [
          { name: `Obsidian Noir`, hex: `#191614`, sizes: { S: 8, M: 10, L: 7, XL: 4 } },
          { name: `Warm Ivory`, hex: `#ede6da`, sizes: { S: 5, M: 6, L: 4, XL: 3 } },
          { name: `Champagne Sand`, hex: `#c9b083`, sizes: { S: 4, M: 5, L: 2, XL: 1 } }
        ]
      },
      {
        id: `m-jacket-1`,
        gender: `men`,
        category: `Jackets`,
        badge: `Exclusive Capsule`,
        title: `Nocturne Architectural Overshirt Jacket`,
        subtitle: `310 GSM Brushed Cotton Canvas`,
        description: `Clean welt-pocket overshirt engineered as a lightweight layering piece with concealed horn-button placket.`,
        priceLkr: 13600,
        tier: `luxury`,
        modelInfo: `Model is 183 cm (6'0") wearing Size L`,
        fabric: { name: `Brushed Cotton Canvas`, gsm: 310, breathability: `83%`, care: `Cold gentle wash` },
        fitVerdict: `Fits True to Size`,
        fitPosition: 51,
        fitDist: [9, 80, 11],
        reviewCount: 74,
        silhouette: `jacket`,
        colors: [
          { name: `Obsidian Noir`, hex: `#151210`, sizes: { S: 2, M: 4, L: 5, XL: 2 } },
          { name: `Deep Indigo`, hex: `#283747`, sizes: { S: 1, M: 3, L: 3, XL: 0 } }
        ]
      }
    ];

    const CUSTOMER_PHOTOS = [
      {
        author: `Nethmi S. · Colombo 03`,
        meta: `Purchased Size M · Height 168 cm · Fit: True to Size`,
        quote: `The unedited daylight color matches the website exactly. Breathable enough for humid Colombo afternoons and drapes cleanly without clinging.`,
        swatch: `#1c1917`,
        tone: `#c9a888`
      },
      {
        author: `Kavindi R. · Kandy`,
        meta: `Purchased Size S · Height 160 cm · Fit: True to Size`,
        quote: `The cm/inch size chart saved me from guessing. Sleeves and shoulder seam sit right where the model caption indicated.`,
        swatch: `#c9b083`,
        tone: `#b89474`
      },
      {
        author: `Dinithi P. · Galle`,
        meta: `Purchased Size L · Height 174 cm · Fit: Slightly Relaxed`,
        quote: `Ordered with FriMi and received in Galle within 48 hours. Knowing the exact 210 GSM fabric weight gave me confidence before buying.`,
        swatch: `#9e5a47`,
        tone: `#aa8464`
      },
      {
        author: `Kasun M. · Maharagama`,
        meta: `Purchased Size L · Height 181 cm · Fit: True to Size`,
        quote: `Button size availability showed M was out in black so I picked L immediately—no annoying dropdown surprises.`,
        swatch: `#2a3b4c`,
        tone: `#9c785c`
      }
    ];

    const SIZE_GUIDE_DATA = [
      { size: `S`, uk: `8`, us: `4`, eu: `36`, chestCm: `84–88`, waistCm: `66–70`, hipCm: `90–94`, chestIn: `33–34.5`, waistIn: `26–27.5`, hipIn: `35.5–37` },
      { size: `M`, uk: `10–12`, us: `6–8`, eu: `38–40`, chestCm: `89–94`, waistCm: `71–76`, hipCm: `95–100`, chestIn: `35–37`, waistIn: `28–30`, hipIn: `37.5–39.5` },
      { size: `L`, uk: `14`, us: `10`, eu: `42`, chestCm: `95–100`, waistCm: `77–82`, hipCm: `101–106`, chestIn: `37.5–39.5`, waistIn: `30.5–32.5`, hipIn: `39.5–41.5` },
      { size: `XL`, uk: `16`, us: `12`, eu: `44`, chestCm: `101–108`, waistCm: `83–90`, hipCm: `107–114`, chestIn: `40–42.5`, waistIn: `32.5–35.5`, hipIn: `42–45` }
    ];

    const MIRROR_COLORS = [
      { name: `Obsidian Noir`, hex: `#1b1815` },
      { name: `Warm Ivory`, hex: `#ece4d7` },
      { name: `Champagne Sand`, hex: `#c9b083` },
      { name: `Colombo Clay`, hex: `#9e5a47` },
      { name: `Deep Indigo`, hex: `#2b3d4f` },
      { name: `Sage Mist`, hex: `#6f7f6b` }
    ];

    let appState = {
      currency: `LKR`,
      genderFilter: `all`,
      categoryFilter: `All`,
      priceTier: `all`,
      selectedProductId: `w-dress-1`,
      selectedColorIndex: 0,
      selectedSize: `M`,
      pdpView: `model`,
      sizeUnit: `cm`,
      crossReviewIndex: 0,
      cart: [],
      savedLooks: [],
      preferredSize: `M`,
      mirror: {
        colorIndex: 0,
        pattern: `solid`,
        fit: `standard`,
        layers: { top: true, bottom: true, coat: true },
        autoRotate: false
      }
    };

    /* ============================================================
       FORMATTERS & PERSISTENCE (notebookAppApi)
       ============================================================ */
    function formatPrice(lkrAmount) {
      if (appState.currency === `USD`) {
        const usd = (lkrAmount / USD_RATE).toFixed(2);
        return `USD ${usd}`;
      }
      return `LKR ${lkrAmount.toLocaleString(`en-US`)}`;
    }

    function formatAltPrice(lkrAmount) {
      if (appState.currency === `USD`) {
        return `Approx. LKR ${lkrAmount.toLocaleString(`en-US`)} · Pay in LKR to waive 2.5% FX stamp duty`;
      }
      const usd = (lkrAmount / USD_RATE).toFixed(2);
      return `Approx. USD ${usd} · 0% foreign card stamp duty in LKR`;
    }

    async function persistState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
        try {
          await window.notebookAppApi.setAppState(appState);
        } catch (err) {
          // Graceful no-op if host rejects
        }
      }
    }

    async function loadInitialState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved && typeof saved === `object`) {
            appState = {
              ...appState,
              ...saved,
              mirror: { ...appState.mirror, ...(saved.mirror || {}) }
            };
          }
        } catch (err) {
          // Default state remains active
        }
      }
    }

    function showToast(message) {
      const toast = document.getElementById(`toast-banner`);
      const textEl = document.getElementById(`toast-text`);
      if (!toast || !textEl) return;
      textEl.textContent = message;
      toast.classList.add(`show`);
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(function () {
        toast.classList.remove(`show`);
      }, 2800);
    }

    /* ============================================================
       CURRENCY & CATALOG FILTERING
       ============================================================ */
    function setCurrency(curr) {
      appState.currency = curr;
      const btnLkr = document.getElementById(`curr-lkr`);
      const btnUsd = document.getElementById(`curr-usd`);
      if (btnLkr) btnLkr.classList.toggle(`active`, curr === `LKR`);
      if (btnUsd) btnUsd.classList.toggle(`active`, curr === `USD`);
      const head = document.getElementById(`matrix-curr-head`);
      if (head) head.textContent = curr;
      renderCatalog();
      renderPriceMatrix();
      renderPdp();
      renderCartDrawer();
      persistState();
    }

    function selectGenderPortal(gender) {
      appState.genderFilter = gender;
      appState.categoryFilter = `All`;
      const pWomen = document.getElementById(`portal-women`);
      const pMen = document.getElementById(`portal-men`);
      if (pWomen) pWomen.classList.toggle(`active`, gender === `women`);
      if (pMen) pMen.classList.toggle(`active`, gender === `men`);
      syncViewButtons(gender);
      renderCatalog();
    }

    function syncViewButtons(gender) {
      const map = { all: `view-all-btn`, women: `view-women-btn`, men: `view-men-btn` };
      Object.keys(map).forEach(function (k) {
        const el = document.getElementById(map[k]);
        if (el) el.classList.toggle(`active`, k === gender);
      });
    }

    function setGenderFilter(gender, btn) {
      appState.genderFilter = gender;
      appState.categoryFilter = `All`;
      syncViewButtons(gender);
      const pWomen = document.getElementById(`portal-women`);
      const pMen = document.getElementById(`portal-men`);
      if (pWomen) pWomen.classList.toggle(`active`, gender === `women` || gender === `all`);
      if (pMen) pMen.classList.toggle(`active`, gender === `men`);
      renderCatalog();
    }

    function filterCatalog(gender, category, btn) {
      appState.genderFilter = gender;
      appState.categoryFilter = category;
      syncViewButtons(gender);
      const containerId = gender === `women` ? `women-cat-pills` : `men-cat-pills`;
      const wrap = document.getElementById(containerId);
      if (wrap) {
        wrap.querySelectorAll(`.cat-btn`).forEach(function (b) { b.classList.remove(`active`); });
      }
      if (btn) btn.classList.add(`active`);
      const pWomen = document.getElementById(`portal-women`);
      const pMen = document.getElementById(`portal-men`);
      if (pWomen) pWomen.classList.toggle(`active`, gender === `women`);
      if (pMen) pMen.classList.toggle(`active`, gender === `men`);
      renderCatalog();
    }

    function setPriceTier(tier, btn) {
      appState.priceTier = tier;
      if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll(`.cat-btn`).forEach(function (b) { b.classList.remove(`active`); });
        btn.classList.add(`active`);
      }
      renderCatalog();
    }

    function getFilteredProducts() {
      return PRODUCTS.filter(function (p) {
        const gOk = appState.genderFilter === `all` || p.gender === appState.genderFilter;
        let cOk = true;
        if (appState.categoryFilter !== `All`) {
          if (appState.categoryFilter === `Casual` || appState.categoryFilter === `Formal`) {
            cOk = p.badge === appState.categoryFilter || p.category === appState.categoryFilter || p.tier !== `luxury`;
          } else {
            cOk = p.category === appState.categoryFilter || p.title.toLowerCase().includes(appState.categoryFilter.toLowerCase().slice(0, 4));
          }
        }
        const tOk = appState.priceTier === `all` || p.tier === appState.priceTier;
        return gOk && cOk && tOk;
      });
    }

    /* ============================================================
       HIGH-FASHION VECTOR/CANVAS EDITORIAL SILHOUETTE RENDERER
       ============================================================ */
    function drawGarmentIllustration(canvas, product, colorHex, viewMode) {
      if (!canvas) return;
      const ctx = canvas.getContext(`2d`);
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Studio dark espresso backdrop gradient
      const bg = ctx.createRadialGradient(w * 0.5, h * 0.36, 12, w * 0.5, h * 0.5, w * 0.85);
      bg.addColorStop(0, `#2e2620`);
      bg.addColorStop(0.65, `#191410`);
      bg.addColorStop(1, `#0f0c0a`);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Subtle architectural runway grid lines
      ctx.strokeStyle = `rgba(201, 176, 131, 0.14)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w * 0.12, h * 0.88);
      ctx.lineTo(w * 0.88, h * 0.88);
      ctx.moveTo(w * 0.5, h * 0.08);
      ctx.lineTo(w * 0.5, h * 0.9);
      ctx.stroke();

      if (viewMode === `fabric`) {
        drawTextileMacro(ctx, w, h, colorHex, product.fabric.gsm);
        return;
      }

      const cx = w * 0.5;
      const isHuman = viewMode !== `flatlay`;

      // Draw stylized editorial human silhouette if Human Model view
      if (isHuman) {
        ctx.fillStyle = `rgba(220, 194, 168, 0.22)`;
        ctx.strokeStyle = `rgba(201, 176, 131, 0.45)`;
        ctx.lineWidth = 1.2;
        // Head
        ctx.beginPath();
        ctx.ellipse(cx, h * 0.16, w * 0.048, h * 0.056, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Neck & Shoulders
        ctx.beginPath();
        ctx.moveTo(cx - w * 0.022, h * 0.215);
        ctx.lineTo(cx + w * 0.022, h * 0.215);
        ctx.lineTo(cx + w * 0.03, h * 0.255);
        ctx.lineTo(cx - w * 0.03, h * 0.255);
        ctx.closePath();
        ctx.fill();
        // Legs
        ctx.beginPath();
        ctx.moveTo(cx - w * 0.055, h * 0.58);
        ctx.lineTo(cx - w * 0.068, h * 0.86);
        ctx.lineTo(cx - w * 0.028, h * 0.86);
        ctx.lineTo(cx - w * 0.008, h * 0.6);
        ctx.lineTo(cx + w * 0.008, h * 0.6);
        ctx.lineTo(cx + w * 0.028, h * 0.86);
        ctx.lineTo(cx + w * 0.068, h * 0.86);
        ctx.lineTo(cx + w * 0.055, h * 0.58);
        ctx.closePath();
        ctx.fill();
      }

      // Draw main garment silhouette tinted with selected colorway
      const gGrad = ctx.createLinearGradient(cx - w * 0.18, h * 0.25, cx + w * 0.18, h * 0.78);
      gGrad.addColorStop(0, colorHex);
      gGrad.addColorStop(0.55, shadeHex(colorHex, 18));
      gGrad.addColorStop(1, shadeHex(colorHex, -18));

      ctx.fillStyle = gGrad;
      ctx.strokeStyle = `#c9b083`;
      ctx.lineWidth = 1.6;

      const s = product.silhouette;
      ctx.beginPath();
      if (s === `dress`) {
        ctx.moveTo(cx - w * 0.12, h * 0.25);
        ctx.lineTo(cx + w * 0.12, h * 0.25);
        ctx.lineTo(cx + w * 0.17, h * 0.44);
        ctx.lineTo(cx + w * 0.22, h * 0.79);
        ctx.lineTo(cx - w * 0.22, h * 0.79);
        ctx.lineTo(cx - w * 0.17, h * 0.44);
        ctx.closePath();
      } else if (s === `jacket`) {
        ctx.moveTo(cx - w * 0.16, h * 0.25);
        ctx.lineTo(cx + w * 0.16, h * 0.25);
        ctx.lineTo(cx + w * 0.24, h * 0.56);
        ctx.lineTo(cx + w * 0.17, h * 0.58);
        ctx.lineTo(cx + w * 0.14, h * 0.36);
        ctx.lineTo(cx + w * 0.14, h * 0.59);
        ctx.lineTo(cx - w * 0.14, h * 0.59);
        ctx.lineTo(cx - w * 0.14, h * 0.36);
        ctx.lineTo(cx - w * 0.17, h * 0.58);
        ctx.lineTo(cx - w * 0.24, h * 0.56);
        ctx.closePath();
      } else if (s === `skirt`) {
        ctx.moveTo(cx - w * 0.1, h * 0.42);
        ctx.lineTo(cx + w * 0.1, h * 0.42);
        ctx.lineTo(cx + w * 0.21, h * 0.78);
        ctx.lineTo(cx - w * 0.21, h * 0.78);
        ctx.closePath();
      } else if (s === `trousers`) {
        ctx.moveTo(cx - w * 0.12, h * 0.42);
        ctx.lineTo(cx + w * 0.12, h * 0.42);
        ctx.lineTo(cx + w * 0.15, h * 0.84);
        ctx.lineTo(cx + w * 0.04, h * 0.84);
        ctx.lineTo(cx, h * 0.56);
        ctx.lineTo(cx - w * 0.04, h * 0.84);
        ctx.lineTo(cx - w * 0.15, h * 0.84);
        ctx.closePath();
      } else {
        // shirt / top / tshirt
        ctx.moveTo(cx - w * 0.15, h * 0.25);
        ctx.lineTo(cx + w * 0.15, h * 0.25);
        ctx.lineTo(cx + w * 0.23, h * 0.43);
        ctx.lineTo(cx + w * 0.16, h * 0.46);
        ctx.lineTo(cx + w * 0.13, h * 0.36);
        ctx.lineTo(cx + w * 0.13, h * 0.57);
        ctx.lineTo(cx - w * 0.13, h * 0.57);
        ctx.lineTo(cx - w * 0.13, h * 0.36);
        ctx.lineTo(cx - w * 0.16, h * 0.46);
        ctx.lineTo(cx - w * 0.23, h * 0.43);
        ctx.closePath();
      }
      ctx.fill();
      ctx.stroke();

      // Tailoring seam / drape folds
      ctx.strokeStyle = `rgba(241, 235, 225, 0.28)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, h * 0.27);
      ctx.lineTo(cx, h * 0.55);
      ctx.moveTo(cx - w * 0.06, h * 0.34);
      ctx.lineTo(cx - w * 0.08, h * 0.53);
      ctx.moveTo(cx + w * 0.06, h * 0.34);
      ctx.lineTo(cx + w * 0.08, h * 0.53);
      ctx.stroke();

      // Architectural dimension callouts in flatlay mode
      if (!isHuman) {
        ctx.strokeStyle = `rgba(201, 176, 131, 0.55)`;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(cx - w * 0.26, h * 0.25);
        ctx.lineTo(cx - w * 0.26, h * 0.78);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = `#c9b083`;
        ctx.font = `12px IBM Plex Mono, monospace`;
        ctx.fillText(`${product.fabric.gsm} GSM`, cx - w * 0.24, h * 0.21);
      }
    }

    function drawTextileMacro(ctx, w, h, colorHex, gsm) {
      ctx.fillStyle = shadeHex(colorHex, -12);
      ctx.fillRect(0, 0, w, h);
      const step = gsm > 240 ? 10 : 13;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const isWarp = ((x / step) + (y / step)) % 2 === 0;
          ctx.fillStyle = isWarp ? shadeHex(colorHex, 22) : shadeHex(colorHex, -22);
          ctx.fillRect(x + 1, y + 1, step - 3, step - 3);
        }
      }
      ctx.strokeStyle = `rgba(201, 176, 131, 0.35)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, Math.min(w, h) * 0.34, 0, Math.PI * 2);
      ctx.stroke();
    }

    function shadeHex(hex, amount) {
      const clean = hex.replace(`#`, ``);
      const num = parseInt(clean, 16);
      const r = Math.min(255, Math.max(0, (num >> 16) + amount));
      const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
      const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
      return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    /* ============================================================
       CATALOG & PRICE MATRIX RENDERING
       ============================================================ */
    function renderCatalog() {
      const grid = document.getElementById(`catalog-grid`);
      const countEl = document.getElementById(`catalog-count-readout`);
      if (!grid) return;

      const items = getFilteredProducts();
      if (countEl) {
        countEl.textContent = `${items.length} Silhouette${items.length === 1 ? `` : `s`} Displayed`;
      }

      if (items.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; padding: var(--space-xl); border: var(--hairline-soft); text-align: center;">
          <p style="margin: 0 0 var(--space-md); color: var(--on-surface-variant);">No silhouettes match that exact combination.</p>
          <button type="button" class="btn btn-secondary" onclick="resetCatalogFilters()">Show All Silhouettes</button>
        </div>`;
        return;
      }

      grid.innerHTML = items.map(function (p) {
        const primaryColor = p.colors[0];
        return `
          <article class="product-card" id="card-${p.id}">
            <div class="product-card-stage">
              <div class="product-card-inner">
                <div class="product-face">
                  <canvas class="product-art-canvas" data-pid="${p.id}" width="360" height="450"></canvas>
                  <div class="product-card-badges">
                    <span class="couture-tag">${p.badge}</span>
                    <button type="button" class="rotate-toggle-btn" aria-label="Flip ${p.title} for fabric specs" onclick="toggleCardFlip('${p.id}')">
                      <i data-lucide="rotate-3d" width="16" height="16"></i>
                    </button>
                  </div>
                </div>
                <div class="product-face product-face-back">
                  <div>
                    <span class="label-voice" style="color: var(--tertiary);">3D Spec Sheet</span>
                    <h4 style="font-family: var(--font-headline); font-size: 1.4rem; font-weight: 400; margin: var(--space-xs) 0;">${p.title}</h4>
                    <p style="font-size: 0.88rem; color: var(--on-surface-variant); margin: var(--space-xs) 0;">${p.description}</p>
                  </div>
                  <div style="border-top: var(--hairline-soft); padding-top: var(--space-sm); font-size: 0.82rem;">
                    <div class="mono-voice" style="color: var(--tertiary);">${p.fabric.name} · ${p.fabric.gsm} GSM</div>
                    <div style="color: var(--on-surface-variant); margin-top: var(--space-xs);">${p.modelInfo}</div>
                  </div>
                  <button type="button" class="btn btn-secondary" onclick="toggleCardFlip('${p.id}')">Return to Front</button>
                </div>
              </div>
            </div>

            <div class="product-meta">
              <div class="product-title-row">
                <h3 class="product-title">${p.title}</h3>
                <span class="product-price">${formatPrice(p.priceLkr)}</span>
              </div>
              <p class="product-sub">${p.subtitle}</p>
              <div class="product-card-actions">
                <button type="button" class="btn btn-secondary" onclick="inspectProductById('${p.id}')">Inspect &amp; Size</button>
                <button type="button" class="btn btn-primary" onclick="tryOnProductById('${p.id}')">3D Try-On</button>
              </div>
            </div>
          </article>
        `;
      }).join(``);

      // Render canvas art for every card
      items.forEach(function (p) {
        const cvs = grid.querySelector(`canvas[data-pid="${p.id}"]`);
        if (cvs) drawGarmentIllustration(cvs, p, p.colors[0].hex, `model`);
      });

      if (window.lucide) window.lucide.createIcons();
    }

    function resetCatalogFilters() {
      appState.genderFilter = `all`;
      appState.categoryFilter = `All`;
      appState.priceTier = `all`;
      syncViewButtons(`all`);
      renderCatalog();
    }

    function toggleCardFlip(pid) {
      const card = document.getElementById(`card-${pid}`);
      if (card) card.classList.toggle(`is-flipped`);
    }

    function renderPriceMatrix() {
      const tbody = document.getElementById(`price-matrix-body`);
      if (!tbody) return;
      tbody.innerHTML = PRODUCTS.map(function (p) {
        return `
          <tr style="cursor: pointer;" onclick="inspectProductById('${p.id}')">
            <td style="font-weight: 500; color: var(--on-surface);">${p.title}</td>
            <td class="label-voice">${p.gender} · ${p.category}</td>
            <td class="mono-voice" style="font-size: 0.84rem; color: var(--on-surface-variant);">${p.fabric.name} (${p.fabric.gsm} GSM)</td>
            <td class="mono-voice" style="color: var(--tertiary);">${formatPrice(p.priceLkr)}</td>
            <td style="color: var(--positive);">${p.fitVerdict}</td>
            <td style="color: var(--on-surface-variant);">24h Express · Free Exchange</td>
          </tr>
        `;
      }).join(``);
    }

    /* ============================================================
       DEDICATED PRODUCT ATELIER (Baymard 5 UX Best Practices)
       ============================================================ */
    function getSelectedProduct() {
      return PRODUCTS.find(function (p) { return p.id === appState.selectedProductId; }) || PRODUCTS[0];
    }

    function inspectProductById(pid) {
      appState.selectedProductId = pid;
      appState.selectedColorIndex = 0;
      const p = getSelectedProduct();
      const firstAvailSize = [`M`, `S`, `L`, `XL`].find(function (sz) { return p.colors[0].sizes[sz] > 0; }) || `M`;
      appState.selectedSize = firstAvailSize;
      renderPdp();
      const el = document.getElementById(`product-atelier`);
      if (el) el.scrollIntoView({ behavior: `smooth` });
      persistState();
    }

    function renderPdp() {
      const p = getSelectedProduct();
      const color = p.colors[appState.selectedColorIndex] || p.colors[0];

      const tag = document.getElementById(`pdp-collection-tag`);
      const title = document.getElementById(`pdp-title`);
      const desc = document.getElementById(`pdp-desc`);
      const priceMain = document.getElementById(`pdp-price-primary`);
      const priceAlt = document.getElementById(`pdp-price-secondary`);
      const colorLbl = document.getElementById(`pdp-color-label`);
      const swatchLbl = document.getElementById(`pdp-swatch-name`);
      const viewLbl = document.getElementById(`pdp-view-label`);

      if (tag) tag.textContent = `${p.gender.toUpperCase()} · ${p.badge}`;
      if (title) title.textContent = p.title;
      if (desc) desc.textContent = p.description;
      if (priceMain) priceMain.textContent = formatPrice(p.priceLkr);
      if (priceAlt) priceAlt.textContent = formatAltPrice(p.priceLkr);
      if (colorLbl) colorLbl.textContent = color.name;
      if (swatchLbl) swatchLbl.textContent = color.name;
      if (viewLbl) {
        if (appState.pdpView === `model`) viewLbl.textContent = `View 01 · On Human Model (${p.modelInfo})`;
        else if (appState.pdpView === `flatlay`) viewLbl.textContent = `View 02 · Architectural Garment Cut (${p.fabric.gsm} GSM)`;
        else viewLbl.textContent = `View 03 · 4× Macro Textile Weave (${p.fabric.name})`;
      }

      // Draw gallery canvas
      const cvs = document.getElementById(`pdp-gallery-canvas`);
      drawGarmentIllustration(cvs, p, color.hex, appState.pdpView);

      // Swatches
      const swatchRow = document.getElementById(`pdp-swatch-row`);
      if (swatchRow) {
        swatchRow.innerHTML = p.colors.map(function (c, idx) {
          const active = idx === appState.selectedColorIndex ? `active` : ``;
          return `
            <button type="button" class="swatch-btn ${active}" onclick="selectPdpColor(${idx})">
              <span class="swatch-dot" style="background-color: ${c.hex};"></span>
              <span>${c.name}</span>
            </button>
          `;
        }).join(``);
      }

      // Button-style size selectors (Baymard #3)
      const sizeGrid = document.getElementById(`pdp-size-grid`);
      if (sizeGrid) {
        sizeGrid.innerHTML = [`S`, `M`, `L`, `XL`].map(function (sz) {
          const qty = color.sizes[sz] || 0;
          const active = sz === appState.selectedSize ? `active` : ``;
          const disabled = qty === 0 ? `disabled` : ``;
          const stockNote = qty === 0 ? `Out` : `${qty} left`;
          return `
            <button type="button" class="size-option-btn ${active}" ${disabled} onclick="selectPdpSize('${sz}')">
              <span class="size-code">${sz}</span>
              <span class="size-stock-sub">${stockNote}</span>
            </button>
          `;
        }).join(``);
      }

      // Stock Status
      const activeQty = color.sizes[appState.selectedSize] || 0;
      const stockPill = document.getElementById(`pdp-stock-pill`);
      const stockText = document.getElementById(`pdp-stock-text`);
      if (stockPill && stockText) {
        stockPill.classList.remove(`low`, `out`);
        if (activeQty === 0) {
          stockPill.classList.add(`out`);
          stockText.textContent = `Size ${appState.selectedSize} Out of Stock · Select Another Size`;
        } else if (activeQty <= 2) {
          stockPill.classList.add(`low`);
          stockText.textContent = `Low Stock · Only ${activeQty} Left in Size ${appState.selectedSize}`;
        } else {
          stockText.textContent = `In Stock · ${activeQty} Ready in Size ${appState.selectedSize} (24h Dispatch)`;
        }
      }

      // Aggregate Fit Subscore (Baymard #5)
      const verdictEl = document.getElementById(`pdp-fit-verdict`);
      const revCountEl = document.getElementById(`pdp-review-count`);
      const marker = document.getElementById(`fit-scale-marker`);
      if (verdictEl) verdictEl.textContent = p.fitVerdict;
      if (revCountEl) revCountEl.textContent = `${p.reviewCount} Verified Reviews`;
      if (marker) marker.style.left = `${p.fitPosition}%`;

      const [sm, tr, lg] = p.fitDist;
      const bSm = document.getElementById(`fit-bar-small`);
      const bTr = document.getElementById(`fit-bar-true`);
      const bLg = document.getElementById(`fit-bar-large`);
      const pSm = document.getElementById(`fit-pct-small`);
      const pTr = document.getElementById(`fit-pct-true`);
      const pLg = document.getElementById(`fit-pct-large`);
      if (bSm) bSm.style.width = `${sm}%`;
      if (bTr) bTr.style.width = `${tr}%`;
      if (bLg) bLg.style.width = `${lg}%`;
      if (pSm) pSm.textContent = `${sm}%`;
      if (pTr) pTr.textContent = `${tr}%`;
      if (pLg) pLg.textContent = `${lg}%`;

      renderCustomerPhotoStrip();
    }

    function setPdpGalleryView(view, btn) {
      appState.pdpView = view;
      if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll(`.pdp-thumb-btn`).forEach(function (b) { b.classList.remove(`active`); });
        btn.classList.add(`active`);
      }
      renderPdp();
    }

    function selectPdpColor(idx) {
      appState.selectedColorIndex = idx;
      const p = getSelectedProduct();
      const c = p.colors[idx];
      if ((c.sizes[appState.selectedSize] || 0) === 0) {
        const avail = [`M`, `S`, `L`, `XL`].find(function (sz) { return c.sizes[sz] > 0; });
        if (avail) appState.selectedSize = avail;
      }
      renderPdp();
      persistState();
    }

    function selectPdpSize(sz) {
      appState.selectedSize = sz;
      renderPdp();
      persistState();
    }

    function renderCustomerPhotoStrip() {
      const grid = document.getElementById(`reviewer-photos-grid`);
      if (!grid) return;
      grid.innerHTML = CUSTOMER_PHOTOS.map(function (cp, idx) {
        return `
          <button type="button" class="reviewer-photo-card" onclick="openCrossReviewModal(${idx})" aria-label="View customer photo by ${cp.author}">
            <canvas data-rev-idx="${idx}" width="180" height="240" style="width: 100%; height: 100%;"></canvas>
            <div class="reviewer-photo-caption">${cp.author.split(`·`)[0].trim()}</div>
          </button>
        `;
      }).join(``);

      CUSTOMER_PHOTOS.forEach(function (cp, idx) {
        const cvs = grid.querySelector(`canvas[data-rev-idx="${idx}"]`);
        if (cvs) drawReviewerPhoto(cvs, cp);
      });
    }

    function drawReviewerPhoto(canvas, cp) {
      const ctx = canvas.getContext(`2d`);
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = `#1e1915`;
      ctx.fillRect(0, 0, w, h);

      // Ambient daylight window shaft
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, `rgba(241, 235, 225, 0.16)`);
      grad.addColorStop(1, `rgba(12, 10, 8, 0.72)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Customer silhouette wearing purchased garment
      ctx.fillStyle = cp.tone;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.22, w * 0.09, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = cp.swatch;
      ctx.strokeStyle = `#c9b083`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(w * 0.34, h * 0.32);
      ctx.lineTo(w * 0.66, h * 0.32);
      ctx.lineTo(w * 0.74, h * 0.78);
      ctx.lineTo(w * 0.26, h * 0.78);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    /* ============================================================
       CART, CHECKOUT & ACCOUNT DRAWERS
       ============================================================ */
    function addSelectedToCart() {
      const p = getSelectedProduct();
      const c = p.colors[appState.selectedColorIndex] || p.colors[0];
      if ((c.sizes[appState.selectedSize] || 0) === 0) {
        showToast(`Selected size is out of stock. Choose another size.`);
        return;
      }
      appState.cart.push({
        id: p.id,
        title: p.title,
        color: c.name,
        size: appState.selectedSize,
        priceLkr: p.priceLkr
      });
      renderCartDrawer();
      persistState();
      showToast(`Added ${p.title} (${appState.selectedSize}) to Bag`);
    }

    function buyNowSelected() {
      addSelectedToCart();
      openCartDrawer();
    }

    function renderCartDrawer() {
      const badge = document.getElementById(`header-cart-count`);
      const list = document.getElementById(`cart-items-list`);
      const sub = document.getElementById(`cart-subtotal-val`);
      if (badge) badge.textContent = String(appState.cart.length);

      let totalLkr = 0;
      appState.cart.forEach(function (item) { totalLkr += item.priceLkr; });
      if (sub) sub.textContent = formatPrice(totalLkr);

      if (!list) return;
      if (appState.cart.length === 0) {
        list.innerHTML = `<div style="padding: var(--space-lg); border: var(--hairline-soft); color: var(--on-surface-variant);">
          Your Style Bag is empty. Inspect a piece from the showroom or customize a look in the 360° Mirror to begin.
        </div>`;
        return;
      }

      list.innerHTML = appState.cart.map(function (item, idx) {
        return `
          <div style="display: flex; justify-content: space-between; align-items: center; gap: var(--space-sm); border-bottom: var(--hairline-soft); padding-bottom: var(--space-sm);">
            <div>
              <div style="font-family: var(--font-headline); font-size: 1.15rem;">${item.title}</div>
              <div class="label-voice" style="font-size: 0.68rem;">${item.color} · Size ${item.size}</div>
              <div class="mono-voice" style="color: var(--tertiary); font-size: 0.86rem; margin-top: 2px;">${formatPrice(item.priceLkr)}</div>
            </div>
            <button type="button" class="btn btn-ghost" style="min-height: 36px; padding: 0.25rem 0.65rem;" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        `;
      }).join(``);
    }

    function removeCartItem(idx) {
      appState.cart.splice(idx, 1);
      renderCartDrawer();
      persistState();
    }

    function completeDemoOrder() {
      const fb = document.getElementById(`checkout-feedback`);
      const payEl = document.getElementById(`checkout-payment-method`);
      if (appState.cart.length === 0) {
        if (fb) {
          fb.style.color = `var(--warning)`;
          fb.textContent = `Add at least one garment before confirming an order.`;
        }
        return;
      }
      const method = payEl ? payEl.value : `PayHere`;
      const count = appState.cart.length;
      appState.cart = [];
      renderCartDrawer();
      persistState();
      if (fb) {
        fb.style.color = `var(--positive)`;
        fb.textContent = `Express order (${count} piece${count > 1 ? `s` : ``}) reserved via ${method}. Colombo Studio dispatch SMS queued.`;
      }
      showToast(`Order Confirmed via ${method}`);
    }

    function openCartDrawer() {
      const el = document.getElementById(`cart-drawer`);
      if (el) el.classList.add(`open`);
    }
    function closeCartDrawer() {
      const el = document.getElementById(`cart-drawer`);
      if (el) el.classList.remove(`open`);
    }

    function openProfileDrawer() {
      renderProfileDrawer();
      const el = document.getElementById(`profile-drawer`);
      if (el) el.classList.add(`open`);
    }
    function closeProfileDrawer() {
      const el = document.getElementById(`profile-drawer`);
      if (el) el.classList.remove(`open`);
    }

    function saveProfilePrefs() {
      const sel = document.getElementById(`profile-size-pref`);
      if (sel) {
        appState.preferredSize = sel.value;
        persistState();
        showToast(`Saved default fit size: ${sel.value}`);
      }
    }

    function renderProfileDrawer() {
      const sel = document.getElementById(`profile-size-pref`);
      if (sel) sel.value = appState.preferredSize || `M`;
      const list = document.getElementById(`saved-looks-list`);
      if (!list) return;
      if (appState.savedLooks.length === 0) {
        list.innerHTML = `<div style="padding: var(--space-md); border: var(--hairline-soft); font-size: 0.86rem; color: var(--on-surface-variant);">
          No custom Virtual Mirror looks saved yet. Configure colors &amp; patterns in the 360° Mirror and click "Save Look".
        </div>`;
        return;
      }
      list.innerHTML = appState.savedLooks.map(function (lk, idx) {
        return `
          <div style="padding: var(--space-sm); border: var(--hairline-soft); display: flex; justify-content: space-between; align-items: center; gap: var(--space-sm);">
            <div>
              <div style="font-size: 0.9rem; color: var(--on-surface);">${lk.label}</div>
              <div class="label-voice" style="font-size: 0.66rem;">${lk.fit} · ${lk.pattern}</div>
            </div>
            <button type="button" class="btn btn-secondary" style="min-height: 34px; padding: 0.25rem 0.6rem;" onclick="loadSavedLook(${idx})">Apply</button>
          </div>
        `;
      }).join(``);
    }

    function resetSessionState(btn) {
      if (btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Click Again to Confirm Reset`;
        return;
      }
      btn.dataset.armed = `false`;
      btn.textContent = `Reset Saved Session Data`;
      appState.cart = [];
      appState.savedLooks = [];
      renderCartDrawer();
      renderProfileDrawer();
      persistState();
      showToast(`Session wardrobe cleared`);
    }

    /* ============================================================
       SIZE GUIDE & CROSS-REVIEW MODALS
       ============================================================ */
    function openSizeGuideModal() {
      renderSizeGuideTable();
      const el = document.getElementById(`size-guide-modal`);
      if (el) el.classList.add(`open`);
    }
    function closeSizeGuideModal() {
      const el = document.getElementById(`size-guide-modal`);
      if (el) el.classList.remove(`open`);
    }
    function setSizeUnit(unit) {
      appState.sizeUnit = unit;
      const bCm = document.getElementById(`unit-cm-btn`);
      const bIn = document.getElementById(`unit-in-btn`);
      if (bCm) bCm.classList.toggle(`active`, unit === `cm`);
      if (bIn) bIn.classList.toggle(`active`, unit === `in`);
      document.querySelectorAll(`.unit-label`).forEach(function (lbl) { lbl.textContent = unit; });
      renderSizeGuideTable();
    }
    function renderSizeGuideTable() {
      const tbody = document.getElementById(`size-guide-tbody`);
      if (!tbody) return;
      const isIn = appState.sizeUnit === `in`;
      tbody.innerHTML = SIZE_GUIDE_DATA.map(function (row) {
        return `
          <tr>
            <td class="mono-voice" style="color: var(--tertiary); font-weight: 500;">${row.size}</td>
            <td class="mono-voice">${row.uk}</td>
            <td class="mono-voice">${row.us}</td>
            <td class="mono-voice">${row.eu}</td>
            <td class="mono-voice">${isIn ? row.chestIn : row.chestCm}</td>
            <td class="mono-voice">${isIn ? row.waistIn : row.waistCm}</td>
            <td class="mono-voice">${isIn ? row.hipIn : row.hipCm}</td>
          </tr>
        `;
      }).join(``);
    }

    function openCrossReviewModal(idx) {
      appState.crossReviewIndex = idx;
      renderCrossReviewModal();
      const el = document.getElementById(`cross-review-modal`);
      if (el) el.classList.add(`open`);
    }
    function closeCrossReviewModal() {
      const el = document.getElementById(`cross-review-modal`);
      if (el) el.classList.remove(`open`);
    }
    function stepCrossReview(delta) {
      const len = CUSTOMER_PHOTOS.length;
      appState.crossReviewIndex = (appState.crossReviewIndex + delta + len) % len;
      renderCrossReviewModal();
    }
    function renderCrossReviewModal() {
      const cp = CUSTOMER_PHOTOS[appState.crossReviewIndex];
      const counter = document.getElementById(`modal-review-counter`);
      const author = document.getElementById(`modal-review-author`);
      const meta = document.getElementById(`modal-review-meta`);
      const quote = document.getElementById(`modal-review-quote`);
      const cvs = document.getElementById(`modal-review-canvas`);
      if (counter) counter.textContent = `Photo ${appState.crossReviewIndex + 1} of ${CUSTOMER_PHOTOS.length}`;
      if (author) author.textContent = cp.author;
      if (meta) meta.textContent = cp.meta;
      if (quote) quote.textContent = `“${cp.quote}”`;
      if (cvs) drawReviewerPhoto(cvs, cp);
    }

    /* ============================================================
       CAPSULE EDITORIAL CANVASES
       ============================================================ */
    function renderCapsuleCanvases() {
      const p1 = PRODUCTS.find(function (p) { return p.id === `w-jacket-1`; });
      const p2 = PRODUCTS.find(function (p) { return p.id === `m-shirt-1`; });
      const p3 = PRODUCTS.find(function (p) { return p.id === `w-dress-1`; });
      drawGarmentIllustration(document.getElementById(`capsule-canvas-1`), p1, `#171412`, `model`);
      drawGarmentIllustration(document.getElementById(`capsule-canvas-2`), p2, `#2a3b4c`, `model`);
      drawGarmentIllustration(document.getElementById(`capsule-canvas-3`), p3, `#c9b083`, `model`);
    }

    /* ============================================================
       THREE.JS 3D HUMAN CINEMATIC RUNWAY & 360° VIRTUAL MIRROR
       ============================================================ */
    function buildStylizedHumanModel(THREE, garmentColorHex) {
      const root = new THREE.Group();

      const skinMat = new THREE.MeshStandardMaterial({ color: 0xc29b7a, roughness: 0.55, metalness: 0.05 });
      const hairMat = new THREE.MeshStandardMaterial({ color: 0x181310, roughness: 0.7, metalness: 0.1 });
      const clothMat = new THREE.MeshStandardMaterial({ color: garmentColorHex, roughness: 0.62, metalness: 0.08, side: THREE.DoubleSide });
      const bottomMat = new THREE.MeshStandardMaterial({ color: 0x1d1916, roughness: 0.72, metalness: 0.06, side: THREE.DoubleSide });
      const coatMat = new THREE.MeshStandardMaterial({ color: garmentColorHex, roughness: 0.52, metalness: 0.14, side: THREE.DoubleSide });
      const accentMat = new THREE.MeshStandardMaterial({ color: 0xc9b083, roughness: 0.35, metalness: 0.65 });

      // Head & Sculpted Hair
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.145, 24, 24), skinMat);
      head.scale.set(0.88, 1.12, 0.92);
      head.position.y = 1.66;
      root.add(head);

      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.152, 20, 20), hairMat);
      hair.scale.set(0.92, 1.05, 0.98);
      hair.position.set(0, 1.69, -0.02);
      root.add(hair);

      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.14, 16), skinMat);
      neck.position.y = 1.49;
      root.add(neck);

      // Torso / Top Layer
      const topMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.145, 0.48, 24), clothMat);
      topMesh.scale.set(1.15, 1, 0.72);
      topMesh.position.y = 1.21;
      root.add(topMesh);

      // Champagne Couture Belt
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.152, 0.152, 0.035, 24), accentMat);
      belt.scale.set(1.16, 1, 0.74);
      belt.position.y = 0.99;
      root.add(belt);

      // Flowing Skirt / Tailored Bottom (vertex-animated in hero loop!)
      const bottomGeo = new THREE.CylinderGeometry(0.155, 0.28, 0.64, 28, 12, true);
      const bottomMesh = new THREE.Mesh(bottomGeo, bottomMat);
      bottomMesh.scale.set(1.12, 1, 0.82);
      bottomMesh.position.y = 0.66;
      root.add(bottomMesh);

      // Flowing Coat / Cape Layer
      const coatGeo = new THREE.CylinderGeometry(0.21, 0.32, 0.86, 24, 10, true, Math.PI * 0.18, Math.PI * 1.64);
      const coatMesh = new THREE.Mesh(coatGeo, coatMat);
      coatMesh.scale.set(1.18, 1, 0.85);
      coatMesh.position.y = 1.01;
      root.add(coatMesh);

      // Articulated Arms
      const armGeo = new THREE.CylinderGeometry(0.044, 0.034, 0.56, 14);
      armGeo.translate(0, -0.25, 0);
      const leftArm = new THREE.Mesh(armGeo, coatMat);
      leftArm.position.set(-0.24, 1.41, 0);
      leftArm.rotation.z = 0.12;
      root.add(leftArm);

      const rightArm = new THREE.Mesh(armGeo, coatMat);
      rightArm.position.set(0.24, 1.41, 0);
      rightArm.rotation.z = -0.12;
      root.add(rightArm);

      // Articulated Legs
      const legGeo = new THREE.CylinderGeometry(0.062, 0.042, 0.76, 14);
      legGeo.translate(0, -0.38, 0);
      const leftLeg = new THREE.Mesh(legGeo, skinMat);
      leftLeg.position.set(-0.095, 0.84, 0);
      root.add(leftLeg);

      const rightLeg = new THREE.Mesh(legGeo, skinMat);
      rightLeg.position.set(0.095, 0.84, 0);
      root.add(rightLeg);

      // Couture Heels / Boots
      const bootGeo = new THREE.BoxGeometry(0.08, 0.09, 0.18);
      const leftBoot = new THREE.Mesh(bootGeo, accentMat);
      leftBoot.position.set(0, -0.76, 0.03);
      leftLeg.add(leftBoot);

      const rightBoot = new THREE.Mesh(bootGeo, accentMat);
      rightBoot.position.set(0, -0.76, 0.03);
      rightLeg.add(rightBoot);

      return {
        root,
        topMesh,
        bottomMesh,
        coatMesh,
        leftArm,
        rightArm,
        leftLeg,
        rightLeg,
        clothMat,
        bottomMat,
        coatMat,
        baseBottomPositions: bottomGeo.attributes.position.array.slice(),
        baseCoatPositions: coatGeo.attributes.position.array.slice()
      };
    }

    let heroSceneCtrl = null;
    function initHeroRunway() {
      const canvas = document.getElementById(`hero-three-canvas`);
      if (!canvas || typeof THREE === `undefined`) return;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x0c0a08, 1);

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0c0a08, 0.11);

      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 40);
      camera.position.set(0.35, 1.35, 3.65);
      camera.lookAt(0, 1.05, 0);

      // Studio Lighting
      const ambient = new THREE.AmbientLight(0xf1ebe1, 0.45);
      scene.add(ambient);

      const keyLight = new THREE.SpotLight(0xf5e8d0, 4.8, 14, Math.PI / 4, 0.55, 1.2);
      keyLight.position.set(2.2, 3.8, 2.8);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xc9b083, 2.1);
      rimLight.position.set(-2.5, 2.4, -2.5);
      scene.add(rimLight);

      // Reflective Runway Strip
      const floorGeo = new THREE.PlaneGeometry(3.2, 16);
      const floorMat = new THREE.MeshStandardMaterial({ color: 0x14100d, roughness: 0.22, metalness: 0.65 });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      scene.add(floor);

      // Runway Champagne Trim Rails
      const railMat = new THREE.MeshBasicMaterial({ color: 0xc9b083 });
      const leftRail = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.01, 16), railMat);
      leftRail.position.set(-1.35, 0.006, 0);
      const rightRail = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.01, 16), railMat);
      rightRail.position.set(1.35, 0.006, 0);
      scene.add(leftRail, rightRail);

      // Human Runway Model
      const model = buildStylizedHumanModel(THREE, 0x26201c);
      scene.add(model.root);

      // Atmospheric Smoke / Haze Particles
      const smokeTexCanvas = document.createElement(`canvas`);
      smokeTexCanvas.width = 64;
      smokeTexCanvas.height = 64;
      const sctx = smokeTexCanvas.getContext(`2d`);
      const sgrad = sctx.createRadialGradient(32, 32, 2, 32, 32, 32);
      sgrad.addColorStop(0, `rgba(241, 235, 225, 0.35)`);
      sgrad.addColorStop(1, `rgba(241, 235, 225, 0)`);
      sctx.fillStyle = sgrad;
      sctx.fillRect(0, 0, 64, 64);
      const smokeTex = new THREE.CanvasTexture(smokeTexCanvas);

      const pCount = 90;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 3.8;
        pPos[i * 3 + 1] = 0.08 + Math.random() * 1.4;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 6.5;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute(`position`, new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.72,
        map: smokeTex,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        color: 0xd9cbb4
      });
      const smokePoints = new THREE.Points(pGeo, pMat);
      scene.add(smokePoints);

      let walkEnabled = true;
      let t = 0;
      let pointerX = 0;

      canvas.addEventListener(`pointermove`, function (ev) {
        const rect = canvas.getBoundingClientRect();
        pointerX = ((ev.clientX - rect.left) / rect.width - 0.5) * 0.45;
      });

      function resizeHero() {
        const w = canvas.clientWidth || 560;
        const h = canvas.clientHeight || 540;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      window.addEventListener(`resize`, resizeHero);
      resizeHero();

      function animate() {
        requestAnimationFrame(animate);
        const step = walkEnabled ? 0.042 : 0.008;
        t += step;

        if (walkEnabled) {
          model.leftLeg.rotation.x = Math.sin(t) * 0.38;
          model.rightLeg.rotation.x = -Math.sin(t) * 0.38;
          model.leftArm.rotation.x = -Math.sin(t) * 0.26;
          model.rightArm.rotation.x = Math.sin(t) * 0.26;
          model.root.position.y = Math.abs(Math.sin(t)) * 0.025;
          model.root.rotation.y = Math.sin(t * 0.3) * 0.12 + pointerX;
        } else {
          model.root.rotation.y += (pointerX - model.root.rotation.y) * 0.06;
        }

        // Real-time cloth wave deformation on flowing skirt & coat
        const bPos = model.bottomMesh.geometry.attributes.position;
        for (let i = 0; i < bPos.count; i++) {
          const bx = model.baseBottomPositions[i * 3];
          const by = model.baseBottomPositions[i * 3 + 1];
          const bz = model.baseBottomPositions[i * 3 + 2];
          const hemFactor = Math.max(0, (0.32 - by) / 0.64);
          const wave = Math.sin(t * 1.8 + bx * 6 + by * 4) * 0.032 * hemFactor;
          bPos.setZ(i, bz + wave);
        }
        bPos.needsUpdate = true;

        const cPos = model.coatMesh.geometry.attributes.position;
        for (let i = 0; i < cPos.count; i++) {
          const cx = model.baseCoatPositions[i * 3];
          const cy = model.baseCoatPositions[i * 3 + 1];
          const cz = model.baseCoatPositions[i * 3 + 2];
          const hemFactor = Math.max(0, (0.43 - cy) / 0.86);
          const wave = Math.cos(t * 1.6 + cx * 5) * 0.04 * hemFactor;
          cPos.setZ(i, cz + wave);
        }
        cPos.needsUpdate = true;

        // Drift smoke particles forward
        const sp = smokePoints.geometry.attributes.position;
        for (let i = 0; i < pCount; i++) {
          let z = sp.getZ(i) + 0.014;
          if (z > 3.2) z = -3.2;
          sp.setZ(i, z);
        }
        sp.needsUpdate = true;

        renderer.render(scene, camera);
      }
      animate();

      heroSceneCtrl = {
        setWalk: function (val) { walkEnabled = val; },
        setLight: function (mode) {
          if (mode === `nocturne`) {
            keyLight.color.setHex(0x9eb8c9);
            rimLight.color.setHex(0xc9b083);
            keyLight.intensity = 3.8;
          } else if (mode === `silver`) {
            keyLight.color.setHex(0xffffff);
            rimLight.color.setHex(0xe4e8ec);
            keyLight.intensity = 5.6;
          } else {
            keyLight.color.setHex(0xf5e8d0);
            rimLight.color.setHex(0xc9b083);
            keyLight.intensity = 4.8;
          }
        },
        pulse: function () {
          walkEnabled = true;
          const btn = document.getElementById(`hero-walk-btn`);
          if (btn) {
            btn.classList.add(`active`);
            btn.textContent = `Runway Walk: On`;
          }
        }
      };
    }

    function toggleHeroWalk(btn) {
      if (!heroSceneCtrl) return;
      const isOn = btn.classList.toggle(`active`);
      btn.textContent = isOn ? `Runway Walk: On` : `Runway Walk: Paused`;
      heroSceneCtrl.setWalk(isOn);
    }

    function setHeroLight(mode, btn) {
      if (!heroSceneCtrl) return;
      if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll(`.stage-chip`).forEach(function (c) {
          if (c.id !== `hero-walk-btn`) c.classList.remove(`active`);
        });
        btn.classList.add(`active`);
      }
      heroSceneCtrl.setLight(mode);
    }

    function pulseRunwayEntrance() {
      if (heroSceneCtrl) heroSceneCtrl.pulse();
    }

    /* ============================================================
       360° VIRTUAL TRY-ON MIRROR & FABRIC ZOOM LOUPE
       ============================================================ */
    let mirrorCtrl = null;
    function initMirrorThree() {
      const canvas = document.getElementById(`mirror-three-canvas`);
      if (!canvas || typeof THREE === `undefined`) return;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x0c0a08, 1);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 30);
      camera.position.set(0, 1.15, 3.25);
      camera.lookAt(0, 1.0, 0);

      scene.add(new THREE.AmbientLight(0xf1ebe1, 0.65));
      const key = new THREE.DirectionalLight(0xfaf0df, 2.3);
      key.position.set(2.2, 3.2, 2.4);
      scene.add(key);

      const backRim = new THREE.DirectionalLight(0xc9b083, 1.6);
      backRim.position.set(-2, 2, -2.5);
      scene.add(backRim);

      // Circular Mirror Pedestal
      const ped = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.92, 0.06, 48),
        new THREE.MeshStandardMaterial({ color: 0x1c1713, roughness: 0.3, metalness: 0.5 })
      );
      ped.position.y = -0.03;
      scene.add(ped);

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.82, 0.85, 48),
        new THREE.MeshBasicMaterial({ color: 0xc9b083, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.005;
      scene.add(ring);

      const model = buildStylizedHumanModel(THREE, 0x1b1815);
      scene.add(model.root);

      let targetAngle = 0;
      let currentAngle = 0;
      let isDragging = false;
      let lastX = 0;

      canvas.addEventListener(`pointerdown`, function (ev) {
        isDragging = true;
        lastX = ev.clientX;
      });
      window.addEventListener(`pointerup`, function () { isDragging = false; });
      window.addEventListener(`pointermove`, function (ev) {
        if (!isDragging) return;
        const dx = ev.clientX - lastX;
        lastX = ev.clientX;
        targetAngle += dx * 0.012;
      });

      function resizeMirror() {
        const w = canvas.clientWidth || 540;
        const h = canvas.clientHeight || 490;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      window.addEventListener(`resize`, resizeMirror);
      resizeMirror();

      function applyGarmentTexture(hex, pattern) {
        const texCvs = document.createElement(`canvas`);
        texCvs.width = 256;
        texCvs.height = 256;
        const tctx = texCvs.getContext(`2d`);
        tctx.fillStyle = hex;
        tctx.fillRect(0, 0, 256, 256);

        if (pattern === `handloom`) {
          tctx.fillStyle = `rgba(201, 176, 131, 0.35)`;
          for (let y = 0; y < 256; y += 24) tctx.fillRect(0, y, 256, 4);
          tctx.fillStyle = `rgba(241, 235, 225, 0.2)`;
          for (let y = 8; y < 256; y += 24) tctx.fillRect(0, y, 256, 2);
        } else if (pattern === `pinstripe`) {
          tctx.fillStyle = `rgba(241, 235, 225, 0.28)`;
          for (let x = 0; x < 256; x += 16) tctx.fillRect(x, 0, 2, 256);
        } else if (pattern === `check`) {
          tctx.strokeStyle = `rgba(201, 176, 131, 0.28)`;
          tctx.lineWidth = 2;
          for (let i = 0; i < 256; i += 24) {
            tctx.beginPath();
            tctx.moveTo(i, 0); tctx.lineTo(i, 256);
            tctx.moveTo(0, i); tctx.lineTo(256, i);
            tctx.stroke();
          }
        }
        const tex = new THREE.CanvasTexture(texCvs);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 2);

        model.clothMat.color.set(0xffffff);
        model.clothMat.map = tex;
        model.clothMat.needsUpdate = true;

        model.coatMat.color.set(0xffffff);
        model.coatMat.map = tex;
        model.coatMat.needsUpdate = true;
      }

      function animateMirror() {
        requestAnimationFrame(animateMirror);
        if (appState.mirror.autoRotate && !isDragging) {
          targetAngle += 0.012;
        }
        currentAngle += (targetAngle - currentAngle) * 0.12;
        model.root.rotation.y = currentAngle;
        renderer.render(scene, camera);
      }
      animateMirror();

      mirrorCtrl = {
        setAngle: function (rad) { targetAngle = rad; },
        updateStyle: function () {
          const cObj = MIRROR_COLORS[appState.mirror.colorIndex] || MIRROR_COLORS[0];
          applyGarmentTexture(cObj.hex, appState.mirror.pattern);
          model.topMesh.visible = appState.mirror.layers.top;
          model.bottomMesh.visible = appState.mirror.layers.bottom;
          model.coatMesh.visible = appState.mirror.layers.coat;
          model.leftArm.visible = appState.mirror.layers.top || appState.mirror.layers.coat;
          model.rightArm.visible = appState.mirror.layers.top || appState.mirror.layers.coat;

          if (appState.mirror.fit === `petite`) model.root.scale.set(0.95, 0.93, 0.95);
          else if (appState.mirror.fit === `tall`) model.root.scale.set(1.04, 1.07, 1.04);
          else model.root.scale.set(1, 1, 1);
        }
      };
      mirrorCtrl.updateStyle();
    }

    function renderMirrorSwatches() {
      const row = document.getElementById(`mirror-color-row`);
      if (!row) return;
      row.innerHTML = MIRROR_COLORS.map(function (c, idx) {
        const active = idx === appState.mirror.colorIndex ? `active` : ``;
        return `
          <button type="button" class="swatch-btn ${active}" onclick="setMirrorColor(${idx})">
            <span class="swatch-dot" style="background-color: ${c.hex};"></span>
            <span>${c.name}</span>
          </button>
        `;
      }).join(``);
    }

    function updateMirrorSummaryAndLoupe() {
      const cObj = MIRROR_COLORS[appState.mirror.colorIndex] || MIRROR_COLORS[0];
      const sum = document.getElementById(`mirror-active-summary`);
      if (sum) {
        sum.textContent = `${cObj.name} · ${appState.mirror.pattern.toUpperCase()} · ${appState.mirror.fit.toUpperCase()} Fit`;
      }
      const p = getSelectedProduct();
      const loupeCanvas = document.getElementById(`fabric-loupe-canvas`);
      if (loupeCanvas) {
        const ctx = loupeCanvas.getContext(`2d`);
        drawTextileMacro(ctx, loupeCanvas.width, loupeCanvas.height, cObj.hex, p.fabric.gsm);
        if (appState.mirror.pattern === `handloom`) {
          ctx.fillStyle = `rgba(201, 176, 131, 0.42)`;
          for (let y = 20; y < 240; y += 44) ctx.fillRect(0, y, 240, 8);
        }
      }
      const lName = document.getElementById(`loupe-fabric-name`);
      const lGsm = document.getElementById(`loupe-gsm-badge`);
      const lCare = document.getElementById(`loupe-care-note`);
      if (lName) lName.textContent = `${p.fabric.name} (${cObj.name})`;
      if (lGsm) lGsm.textContent = `${p.fabric.gsm} GSM`;
      if (lCare) lCare.textContent = `Breathability: ${p.fabric.breathability} · ${p.fabric.care}`;
    }

    function setMirrorCamera(rad, btn) {
      if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll(`.stage-chip`).forEach(function (c) {
          if (c.id !== `mirror-spin-btn`) c.classList.remove(`active`);
        });
        btn.classList.add(`active`);
      }
      if (mirrorCtrl) mirrorCtrl.setAngle(rad);
    }

    function toggleMirrorAutoRotate(btn) {
      appState.mirror.autoRotate = !appState.mirror.autoRotate;
      if (btn) {
        btn.classList.toggle(`active`, appState.mirror.autoRotate);
        btn.textContent = appState.mirror.autoRotate ? `Auto-360: On` : `Auto-360: Off`;
      }
    }

    function setMirrorColor(idx) {
      appState.mirror.colorIndex = idx;
      renderMirrorSwatches();
      if (mirrorCtrl) mirrorCtrl.updateStyle();
      updateMirrorSummaryAndLoupe();
      persistState();
    }

    function setMirrorPattern(pattern, btn) {
      appState.mirror.pattern = pattern;
      if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll(`.cat-btn`).forEach(function (b) { b.classList.remove(`active`); });
        btn.classList.add(`active`);
      }
      if (mirrorCtrl) mirrorCtrl.updateStyle();
      updateMirrorSummaryAndLoupe();
      persistState();
    }

    function setMirrorFit(fit, btn) {
      appState.mirror.fit = fit;
      if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll(`.cat-btn`).forEach(function (b) { b.classList.remove(`active`); });
        btn.classList.add(`active`);
      }
      if (mirrorCtrl) mirrorCtrl.updateStyle();
      updateMirrorSummaryAndLoupe();
      persistState();
    }

    function toggleMirrorLayer(layerKey, btn) {
      appState.mirror.layers[layerKey] = !appState.mirror.layers[layerKey];
      if (btn) {
        btn.classList.toggle(`active`, appState.mirror.layers[layerKey]);
        const labels = { top: `Base Top / Dress`, bottom: `Tailored Bottom`, coat: `Runway Outerwear` };
        btn.textContent = `${labels[layerKey]}: ${appState.mirror.layers[layerKey] ? `On` : `Off`}`;
      }
      if (mirrorCtrl) mirrorCtrl.updateStyle();
      persistState();
    }

    function sendSelectedToMirror() {
      const p = getSelectedProduct();
      const c = p.colors[appState.selectedColorIndex] || p.colors[0];
      const matchIdx = MIRROR_COLORS.findIndex(function (mc) {
        return mc.name.split(` `)[0] === c.name.split(` `)[0];
      });
      if (matchIdx >= 0) appState.mirror.colorIndex = matchIdx;
      renderMirrorSwatches();
      if (mirrorCtrl) mirrorCtrl.updateStyle();
      updateMirrorSummaryAndLoupe();
      const el = document.getElementById(`virtual-mirror`);
      if (el) el.scrollIntoView({ behavior: `smooth` });
      showToast(`Loaded ${p.title} onto 360° Mirror`);
    }

    function tryOnProductById(pid) {
      appState.selectedProductId = pid;
      appState.selectedColorIndex = 0;
      renderPdp();
      sendSelectedToMirror();
    }

    function saveCurrentLook() {
      const cObj = MIRROR_COLORS[appState.mirror.colorIndex] || MIRROR_COLORS[0];
      const p = getSelectedProduct();
      appState.savedLooks.unshift({
        label: `${p.title} · ${cObj.name}`,
        colorIndex: appState.mirror.colorIndex,
        pattern: appState.mirror.pattern,
        fit: appState.mirror.fit
      });
      if (appState.savedLooks.length > 6) appState.savedLooks.pop();
      persistState();
      showToast(`Saved styled look to Account Wardrobe`);
    }

    function loadSavedLook(idx) {
      const lk = appState.savedLooks[idx];
      if (!lk) return;
      appState.mirror.colorIndex = lk.colorIndex;
      appState.mirror.pattern = lk.pattern;
      appState.mirror.fit = lk.fit;
      renderMirrorSwatches();
      if (mirrorCtrl) mirrorCtrl.updateStyle();
      updateMirrorSummaryAndLoupe();
      closeProfileDrawer();
      const el = document.getElementById(`virtual-mirror`);
      if (el) el.scrollIntoView({ behavior: `smooth` });
    }

    function addMirrorLookToCart() {
      const cObj = MIRROR_COLORS[appState.mirror.colorIndex] || MIRROR_COLORS[0];
      const bundlePrice = Math.round(21500 * 0.9);
      appState.cart.push({
        id: `bundle-look`,
        title: `Complete Styled Look (10% Bundle Savings)`,
        color: `${cObj.name} (${appState.mirror.pattern})`,
        size: appState.preferredSize || `M`,
        priceLkr: bundlePrice
      });
      renderCartDrawer();
      persistState();
      openCartDrawer();
      showToast(`Complete Styled Look added with 10% savings`);
    }

    /* ============================================================
       CONTACT FORM & SCROLL REVEAL
       ============================================================ */
    function submitContactForm(ev) {
      ev.preventDefault();
      const nameEl = document.getElementById(`contact-name`);
      const phoneEl = document.getElementById(`contact-phone`);
      const statusEl = document.getElementById(`contact-form-status`);
      const name = nameEl ? nameEl.value.trim() : ``;
      const contact = phoneEl ? phoneEl.value.trim() : ``;
      if (!name || !contact) {
        if (statusEl) {
          statusEl.style.color = `var(--error)`;
          statusEl.textContent = `Please provide both your name and a +94 phone or email.`;
        }
        return;
      }
      if (statusEl) {
        statusEl.style.color = `var(--positive)`;
        statusEl.textContent = `Thank you, ${name}. Our Colombo styling desk will reply shortly.`;
      }
      ev.target.reset();
    }

    function initScrollReveals() {
      const sections = document.querySelectorAll(`.reveal-section`);
      if (!(`IntersectionObserver` in window)) {
        sections.forEach(function (s) { s.classList.add(`visible`); });
        return;
      }
      const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add(`visible`);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      sections.forEach(function (s) { obs.observe(s); });
    }

    /* ============================================================
       BOOT SEQUENCE
       ============================================================ */
    document.addEventListener(`DOMContentLoaded`, async function () {
      await loadInitialState();

      // Sync currency toggle
      setCurrency(appState.currency || `LKR`);
      renderMirrorSwatches();
      updateMirrorSummaryAndLoupe();
      renderCapsuleCanvases();
      renderCartDrawer();
      initScrollReveals();
      initHeroRunway();
      initMirrorThree();

      if (window.lucide) window.lucide.createIcons();

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    });