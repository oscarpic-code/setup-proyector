"use strict";

const STORAGE_KEY = "putrims-s36-setup-step";

const art = {
  welcome: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Una pantalla de cine en casa</title>
      <desc id="art-desc">Un proyector ilumina una pantalla con estrellas y palomitas.</desc>
      <rect x="76" y="24" width="210" height="132" rx="14" fill="#25283b"/>
      <rect x="86" y="34" width="190" height="112" rx="8" fill="#f3f1ff"/>
      <circle cx="128" cy="72" r="13" fill="#ffd49a"/>
      <path d="M92 128l48-42 31 25 25-18 74 35z" fill="#aaa4ed"/>
      <path d="M160 156v18m44-18v18m-72 0h100" stroke="#74799a" stroke-width="8" stroke-linecap="round"/>
      <rect x="117" y="190" width="112" height="37" rx="13" fill="#5555a1"/>
      <circle cx="209" cy="208" r="9" fill="#a9a9ff"/>
      <path d="M117 198l-52-28-14 3 48 30z" fill="#f7c971" opacity=".8"/>
      <path d="M104 71l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" fill="#f1bd61"/>
      <path d="M264 173l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z" fill="#f1bd61"/>
    </svg>`,
  prepare: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Lo que conviene tener a mano</title>
      <desc id="art-desc">Ilustraciones de proyector, mando, router, cable y pared.</desc>
      <rect x="34" y="38" width="122" height="83" rx="17" fill="#fff" stroke="#dfe1ea" stroke-width="3"/>
      <rect x="49" y="55" width="92" height="50" rx="11" fill="#515568"/>
      <circle cx="132" cy="80" r="13" fill="#a5a1ed"/>
      <path d="M72 121v15m45-15v15m-61 0h79" stroke="#999eb0" stroke-width="5" stroke-linecap="round"/>
      <rect x="192" y="42" width="47" height="111" rx="18" fill="#34384b"/>
      <circle cx="215" cy="62" r="7" fill="#aaa7ef"/>
      <circle cx="215" cy="86" r="12" fill="#656b83"/>
      <circle cx="215" cy="86" r="3" fill="#fff"/>
      <circle cx="202" cy="111" r="4" fill="#c6c8d3"/>
      <circle cx="215" cy="111" r="4" fill="#c6c8d3"/>
      <circle cx="228" cy="111" r="4" fill="#c6c8d3"/>
      <path d="M280 77l18-14 18 14v41h-36z" fill="#e7edff" stroke="#9eacd9" stroke-width="3"/>
      <path d="M286 80q12-11 24 0m-20 8q8-7 16 0" fill="none" stroke="#6978c8" stroke-width="3" stroke-linecap="round"/>
      <circle cx="298" cy="97" r="3" fill="#6978c8"/>
      <path d="M63 198c0-20 26-20 26 0v18H63z" fill="#ffd28a"/>
      <path d="M102 203c0-14 18-14 18 0v13h-18zm24-10c0-14 18-14 18 0v23h-18zm23 10c0-14 18-14 18 0v13h-18z" fill="#f6bf70"/>
      <path d="M205 198h75" stroke="#aaaec0" stroke-width="7" stroke-linecap="round"/>
      <path d="M280 198v16c0 11 15 11 15 0v-7" fill="none" stroke="#777e98" stroke-width="7" stroke-linecap="round"/>
      <path d="M40 172h278" stroke="#e2e4eb" stroke-width="2" stroke-dasharray="5 7"/>
    </svg>`,
  plug: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Conecta el proyector a la corriente</title>
      <desc id="art-desc">Un cable une el proyector con un enchufe de pared.</desc>
      <rect x="45" y="77" width="160" height="95" rx="22" fill="#4c5065"/>
      <rect x="64" y="94" width="120" height="59" rx="13" fill="#34384c"/>
      <circle cx="173" cy="123" r="17" fill="#a8a4f0"/>
      <circle cx="173" cy="123" r="8" fill="#d9d7ff"/>
      <path d="M81 172v16m94-16v16m-108 0h127" stroke="#9da2b5" stroke-width="7" stroke-linecap="round"/>
      <path d="M207 126c47 0 24 82 78 82" fill="none" stroke="#7f879d" stroke-width="7" stroke-linecap="round"/>
      <rect x="278" y="165" width="49" height="57" rx="12" fill="#fff" stroke="#d7dbe5" stroke-width="3"/>
      <path d="M294 160v18m17-18v18" stroke="#9299aa" stroke-width="5" stroke-linecap="round"/>
      <path d="M293 193h4m12 0h4" stroke="#b3b8c5" stroke-width="4" stroke-linecap="round"/>
      <path d="M277 203h-19" stroke="#7f879d" stroke-width="7" stroke-linecap="round"/>
      <path d="M101 57c7-11 20-11 27 0m-37-11c13-20 35-20 48 0" fill="none" stroke="#8c85e7" stroke-width="4" stroke-linecap="round"/>
    </svg>`,
  place: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Coloca el proyector frente a la pared</title>
      <desc id="art-desc">La distancia orientativa determina el ancho de la imagen.</desc>
      <rect x="236" y="32" width="10" height="175" rx="5" fill="#d9d8f6"/>
      <rect x="250" y="50" width="78" height="136" rx="9" fill="#fff" stroke="#d6d7e5" stroke-width="3"/>
      <rect x="261" y="61" width="56" height="114" rx="5" fill="#f1efff"/>
      <circle cx="287" cy="97" r="17" fill="#ffd99d"/>
      <path d="M265 164l22-27 12 12 13-16v42h-47z" fill="#a8a2eb"/>
      <rect x="34" y="142" width="95" height="57" rx="14" fill="#53586e"/>
      <circle cx="119" cy="170" r="12" fill="#a9a5ef"/>
      <path d="M53 198v10m57-10v10m-72 0h89" stroke="#969caf" stroke-width="6" stroke-linecap="round"/>
      <path d="M132 169l88-50M132 175l88 26" stroke="#c6c1f3" stroke-width="3" stroke-dasharray="7 7"/>
      <path d="M128 226h105m-105 0 10-7m-10 7 10 7m95-7-10-7m10 7-10 7" fill="none" stroke="#7b75d1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="179" y="218" fill="#625bb3" font-size="12" font-family="sans-serif" text-anchor="middle">distancia</text>
      <path d="M87 71h81" stroke="#c8cbd7" stroke-width="3" stroke-linecap="round"/>
      <path d="M87 71l9-6m-9 6 9 6m72-6-9-6m9 6-9 6" fill="none" stroke="#c8cbd7" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  power: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Enciende el proyector con el mando</title>
      <desc id="art-desc">Un mando genérico y el símbolo de encendido, sin señalar la posición exacta del botón.</desc>
      <rect x="53" y="49" width="105" height="138" rx="19" fill="#4b5064"/>
      <rect x="65" y="62" width="81" height="111" rx="12" fill="#292d3e"/>
      <circle cx="105" cy="112" r="25" fill="#636a83"/>
      <path d="M105 94v18m-12-11a18 18 0 1 0 24 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <rect x="205" y="48" width="54" height="142" rx="22" fill="#363a4c"/>
      <circle cx="232" cy="69" r="7" fill="#aaa6ee"/>
      <circle cx="232" cy="102" r="15" fill="#656b82"/>
      <circle cx="232" cy="102" r="4" fill="#fff"/>
      <circle cx="218" cy="137" r="4" fill="#c3c6d1"/>
      <circle cx="232" cy="137" r="4" fill="#c3c6d1"/>
      <circle cx="246" cy="137" r="4" fill="#c3c6d1"/>
      <path d="M151 115h35" stroke="#8c85e7" stroke-width="3" stroke-dasharray="5 6"/>
      <circle cx="181" cy="115" r="5" fill="#8c85e7"/>
      <text x="232" y="215" fill="#6c7180" font-size="11" font-family="sans-serif" text-anchor="middle">mando genérico</text>
      <text x="105" y="215" fill="#6c7180" font-size="11" font-family="sans-serif" text-anchor="middle">⏻ encendido</text>
    </svg>`,
  remote: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Flechas y botones del mando</title>
      <desc id="art-desc">Un mando genérico muestra una cruceta, selección y retroceso; la distribución puede variar.</desc>
      <rect x="123" y="17" width="114" height="218" rx="39" fill="#363a4c"/>
      <rect x="134" y="29" width="92" height="193" rx="31" fill="#474c62"/>
      <circle cx="180" cy="53" r="8" fill="#aca8ef"/>
      <circle cx="180" cy="111" r="37" fill="#666c84"/>
      <circle cx="180" cy="111" r="17" fill="#8884d9"/>
      <path d="M180 80v12m0 38v12m-31-31h12m38 0h12" stroke="#f4f4ff" stroke-width="5" stroke-linecap="round"/>
      <circle cx="180" cy="111" r="5" fill="#fff"/>
      <path d="M153 171l-7 7 7 7m53-14 7 7-7 7" fill="none" stroke="#d0d2df" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="154" cy="179" r="12" fill="none" stroke="#c3c5d2" stroke-width="2"/>
      <circle cx="206" cy="179" r="12" fill="none" stroke="#c3c5d2" stroke-width="2"/>
      <path d="M71 105h34m150 0h34" stroke="#aaa5ed" stroke-width="2" stroke-dasharray="4 5"/>
      <text x="56" y="100" fill="#656b7b" font-size="11" font-family="sans-serif" text-anchor="middle">Flechas</text>
      <text x="304" y="100" fill="#656b7b" font-size="11" font-family="sans-serif" text-anchor="middle">Aceptar</text>
      <text x="180" y="252" fill="#6c7180" font-size="11" font-family="sans-serif" text-anchor="middle">Dibujo orientativo; puede variar</text>
    </svg>`,
  wifi: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Conecta el proyector al Wi-Fi</title>
      <desc id="art-desc">Proyector y router conectados mediante ondas inalámbricas.</desc>
      <path d="M139 82q41-41 82 0m-65 18q24-24 48 0m-31 18q7-7 14 0" fill="none" stroke="#7770d9" stroke-width="7" stroke-linecap="round"/>
      <circle cx="180" cy="129" r="5" fill="#7770d9"/>
      <path d="M50 72h78v84H50z" fill="#e8edff" stroke="#aab5dc" stroke-width="3" rx="15"/>
      <path d="M59 83q30-24 60 0m-51 9q21-17 42 0" fill="none" stroke="#7180cc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="75" cy="109" r="4" fill="#7180cc"/>
      <circle cx="88" cy="109" r="4" fill="#b5bdde"/>
      <circle cx="101" cy="109" r="4" fill="#b5bdde"/>
      <path d="M64 156v12m51-12v12m-62 0h73" stroke="#9ba3bc" stroke-width="6" stroke-linecap="round"/>
      <rect x="224" y="151" width="87" height="58" rx="14" fill="#4d5267"/>
      <circle cx="293" cy="180" r="12" fill="#a9a5ee"/>
      <path d="M242 209v10m53-10v10m-62 0h71" stroke="#999fb0" stroke-width="6" stroke-linecap="round"/>
      <path d="M129 166q48 36 94 0" fill="none" stroke="#b9b5ed" stroke-width="3" stroke-dasharray="6 7"/>
      <rect x="112" y="191" width="126" height="32" rx="16" fill="#fff" stroke="#e6e7ef" stroke-width="2"/>
      <text x="175" y="212" fill="#696f7d" font-size="11" font-family="sans-serif" text-anchor="middle">Tu red Wi-Fi</text>
    </svg>`,
  internet: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Comprueba que hay conexión</title>
      <desc id="art-desc">Una pantalla muestra una señal de conexión correcta.</desc>
      <rect x="53" y="38" width="254" height="155" rx="19" fill="#41465b"/>
      <rect x="65" y="50" width="230" height="130" rx="11" fill="#f7f6ff"/>
      <circle cx="180" cy="109" r="34" fill="#e2f5ee"/>
      <path d="M164 109l11 11 23-25" fill="none" stroke="#54a88a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="180" y="159" fill="#646b7b" font-size="13" font-family="sans-serif" text-anchor="middle">Conectado</text>
      <path d="M153 194v17m54-17v17m-73 0h92" stroke="#949aaf" stroke-width="7" stroke-linecap="round"/>
      <rect x="71" y="219" width="218" height="24" rx="12" fill="#eeedff"/>
      <path d="M87 231h23m-12-7 8 7-8 7" fill="none" stroke="#6b62d9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="196" y="235" fill="#625bb3" font-size="11" font-family="sans-serif" text-anchor="middle">Abre una aplicación</text>
    </svg>`,
  netflix: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Abre Netflix desde el proyector</title>
      <desc id="art-desc">Una pantalla de aplicaciones genérica incluye una tarjeta roja de Netflix.</desc>
      <rect x="35" y="34" width="290" height="177" rx="19" fill="#41465b"/>
      <rect x="47" y="46" width="266" height="153" rx="11" fill="#232536"/>
      <text x="66" y="72" fill="#fff" font-size="12" font-family="sans-serif" font-weight="700">Mis aplicaciones</text>
      <rect x="65" y="87" width="66" height="75" rx="10" fill="#fff"/>
      <path d="M85 148V101l7 2 16 31v-29l8 2v42l-8-2-15-29v31z" fill="#df1f2d"/>
      <rect x="147" y="87" width="66" height="75" rx="10" fill="#e8e7ff"/>
      <circle cx="180" cy="115" r="14" fill="#8a84db"/>
      <path d="M167 144h26m-21 7h16" stroke="#8a84db" stroke-width="4" stroke-linecap="round"/>
      <rect x="229" y="87" width="66" height="75" rx="10" fill="#e5f1ff"/>
      <path d="M254 111h17m-17 10h17m-17 10h10" stroke="#6a91cf" stroke-width="5" stroke-linecap="round"/>
      <circle cx="98" cy="174" r="4" fill="#fff"/>
      <path d="M146 219h68" stroke="#a3a8b7" stroke-width="7" stroke-linecap="round"/>
    </svg>`,
  movistar: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Busca Movistar Plus+ en la tienda</title>
      <desc id="art-desc">Una lupa busca una aplicación en una tienda genérica.</desc>
      <rect x="43" y="35" width="274" height="173" rx="19" fill="#41465b"/>
      <rect x="55" y="47" width="250" height="149" rx="11" fill="#f8f8fc"/>
      <text x="74" y="77" fill="#4b5060" font-size="13" font-family="sans-serif" font-weight="700">Tienda de aplicaciones</text>
      <rect x="73" y="92" width="214" height="38" rx="11" fill="#fff" stroke="#dedfea" stroke-width="2"/>
      <circle cx="92" cy="110" r="7" fill="none" stroke="#969bad" stroke-width="3"/>
      <path d="M97 115l6 6" stroke="#969bad" stroke-width="3" stroke-linecap="round"/>
      <text x="112" y="115" fill="#9298a7" font-size="11" font-family="sans-serif">Buscar aplicación</text>
      <rect x="74" y="144" width="47" height="37" rx="9" fill="#e5efff"/>
      <path d="M84 164q9-14 18 0-9 10-18 0" fill="none" stroke="#4781d1" stroke-width="4"/>
      <path d="M132 151h132m-132 12h92" stroke="#d2d5df" stroke-width="5" stroke-linecap="round"/>
      <circle cx="273" cy="169" r="34" fill="#fff" stroke="#8b84df" stroke-width="7"/>
      <path d="M297 194l25 24" stroke="#8b84df" stroke-width="9" stroke-linecap="round"/>
      <text x="180" y="230" fill="#747b8a" font-size="11" font-family="sans-serif" text-anchor="middle">Si no aparece, no es compatible en este momento</text>
    </svg>`,
  iphone: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Envía tu iPhone a la pantalla</title>
      <desc id="art-desc">Un iPhone se conecta de forma inalámbrica al proyector.</desc>
      <rect x="48" y="39" width="88" height="167" rx="21" fill="#34394b"/>
      <rect x="56" y="50" width="72" height="145" rx="14" fill="#f1efff"/>
      <rect x="82" y="56" width="20" height="5" rx="3" fill="#34394b"/>
      <circle cx="92" cy="133" r="24" fill="#d6d2fb"/>
      <path d="M78 137l14-17 15 17" fill="none" stroke="#7770d9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M145 105q31-31 62 0m-49 14q18-18 36 0" fill="none" stroke="#8881e0" stroke-width="4" stroke-linecap="round"/>
      <circle cx="176" cy="129" r="4" fill="#8881e0"/>
      <rect x="221" y="74" width="103" height="76" rx="16" fill="#4c5166"/>
      <rect x="231" y="83" width="83" height="55" rx="9" fill="#e9e7ff"/>
      <circle cx="274" cy="110" r="13" fill="#a9a4eb"/>
      <path d="M259 151v13m28-13v13m-45 0h63" stroke="#999fb0" stroke-width="6" stroke-linecap="round"/>
      <path d="M152 192h49" stroke="#c9c5f0" stroke-width="3" stroke-dasharray="5 6"/>
      <text x="180" y="225" fill="#747b8a" font-size="11" font-family="sans-serif" text-anchor="middle">Los dos dispositivos en la misma red Wi-Fi</text>
    </svg>`,
  airplay: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Busca Duplicar pantalla en el iPhone</title>
      <desc id="art-desc">Un Centro de control ilustrativo muestra el botón de duplicar pantalla.</desc>
      <rect x="65" y="25" width="230" height="209" rx="24" fill="#24283a"/>
      <rect x="77" y="37" width="206" height="185" rx="16" fill="#e9e8f4"/>
      <rect x="91" y="54" width="78" height="68" rx="14" fill="#fff"/>
      <circle cx="112" cy="78" r="9" fill="#f5c467"/>
      <path d="M99 110l19-20 15 13 12-10v17z" fill="#8c86dc"/>
      <rect x="178" y="54" width="88" height="29" rx="14" fill="#fff"/>
      <path d="M192 69h12m9 0h12m9 0h12" stroke="#8c91a3" stroke-width="4" stroke-linecap="round"/>
      <rect x="178" y="91" width="88" height="31" rx="15" fill="#fff"/>
      <path d="M194 108a9 9 0 0 1 18 0m-14-1h10m-5-7v14" fill="none" stroke="#7974ca" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="91" y="134" width="78" height="70" rx="14" fill="#fff"/>
      <path d="M110 174h40m-33-6h26m-20-6h14" stroke="#aaaebb" stroke-width="4" stroke-linecap="round"/>
      <rect x="178" y="134" width="88" height="70" rx="14" fill="#fff" stroke="#8179db" stroke-width="3"/>
      <rect x="203" y="147" width="39" height="26" rx="3" fill="none" stroke="#7570c9" stroke-width="3"/>
      <rect x="198" y="180" width="49" height="5" rx="3" fill="#7570c9"/>
      <text x="222" y="198" fill="#615ab3" font-size="8" font-family="sans-serif" text-anchor="middle">Duplicar pantalla</text>
      <circle cx="180" cy="228" r="3" fill="#fff"/>
    </svg>`,
  done: `
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">Tu cine está preparado</title>
      <desc id="art-desc">Una pantalla de cine iluminada, estrellas y palomitas celebran el final.</desc>
      <rect x="69" y="31" width="222" height="137" rx="17" fill="#34384b"/>
      <rect x="80" y="42" width="200" height="115" rx="10" fill="#f5f2ff"/>
      <circle cx="232" cy="75" r="18" fill="#ffd58d"/>
      <path d="M88 143l46-43 31 24 31-31 76 52z" fill="#9690e4"/>
      <path d="M158 168v19m44-19v19m-69 0h94" stroke="#989eb0" stroke-width="7" stroke-linecap="round"/>
      <rect x="140" y="202" width="80" height="28" rx="10" fill="#f4c372"/>
      <path d="M146 202c-3-10 8-13 12-5 0-11 14-13 17-2 2-11 17-10 17 1 5-7 16-3 15 6" fill="#ffe2ae" stroke="#e0aa5d" stroke-width="2"/>
      <path d="M45 77l5 11 12 2-9 8 2 12-10-6-11 6 2-12-9-8 12-2zM302 102l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z" fill="#e9b65f"/>
      <path d="M68 187l3 7 8 1-6 5 1 8-6-4-7 4 2-8-6-5 8-1z" fill="#aaa4ec"/>
    </svg>`
};

const steps = [
  {
    kicker: "Bienvenida",
    title: "¡Vamos a poner en marcha tu cine en casa! 🍿",
    intro: "En unos minutos tendrás tu proyector preparado para disfrutar de tus películas y series favoritas.",
    detail: "<p>No te preocupes: te acompañaré en todo momento. Iremos <strong>un paso cada vez</strong>.</p>",
    visual: "welcome",
    caption: "Tu rincón de cine empieza aquí",
    button: "¡Vamos allá!"
  },
  {
    kicker: "Antes de empezar",
    title: "Prepara lo que necesitas",
    intro: "Deja estas cosas cerca para que todo sea más fácil.",
    detail: "<ul><li>El proyector PUTRIMS S36 y su cable de alimentación.</li><li>El mando a distancia y sus pilas.</li><li>Tu router Wi-Fi y la contraseña de la red.</li><li>Una pared blanca o una pantalla de proyección.</li></ul>",
    visual: "prepare",
    caption: "No escribas tu contraseña en esta página"
  },
  {
    kicker: "Conexión",
    title: "Conecta el proyector",
    intro: "Conecta el cable de alimentación al proyector y enchúfalo a la corriente.",
    detail: "<p>Déjalo sobre una superficie firme y despejada, con espacio alrededor para que ventile.</p>",
    warning: "La información facilitada para este modelo indica que necesita estar enchufado y no tiene batería integrada. No he podido contrastar este dato con un manual accesible.",
    visual: "plug",
    caption: "Conéctalo a una toma de corriente",
    help: "Comprueba que el cable está bien encajado en el proyector y en el enchufe. Si el enchufe tiene interruptor, asegúrate de que está encendido."
  },
  {
    kicker: "Colocación",
    title: "Colócalo frente a la pared",
    intro: "Pon el proyector sobre una mesa estable, apuntando a una pared blanca o a la pantalla.",
    detail: "<p>La ficha oficial indica una relación de proyección de <strong>1,19:1</strong>: como orientación, a 1,19 m de la pared la imagen tendría alrededor de 1 m de ancho. Acércalo o aléjalo para ajustar el tamaño.</p><p>Baja las persianas o apaga algunas luces para ver mejor la imagen.</p>",
    visual: "place",
    caption: "Distancia orientativa; ajusta a tu habitación",
    help: "No hace falta medirlo con exactitud: empieza con el proyector cerca de la pared y muévelo poco a poco hasta que la imagen tenga el tamaño que quieres."
  },
  {
    kicker: "Encendido",
    title: "Enciende el proyector",
    intro: "Pulsa el botón de encendido del mando o del proyector y espera un momento.",
    detail: "<p>Cuando aparezca la pantalla de inicio, ya puedes continuar.</p>",
    visual: "power",
    caption: "El dibujo del mando es genérico; no indica la posición real del botón",
    help: "Busca el símbolo de encendido ⏻. La ubicación puede cambiar según el mando; no he encontrado un manual accesible para confirmar su distribución."
  },
  {
    kicker: "El mando",
    title: "Conoce los botones básicos",
    intro: "Usa las flechas para moverte por la pantalla y el botón central para elegir.",
    detail: "<p>El botón de retroceso suele volver a la pantalla anterior. Si el mando es distinto, prueba los botones con calma: aquí no hay ajustes que tengas que cambiar todavía.</p>",
    visual: "remote",
    caption: "Ilustración genérica; la distribución puede variar",
    help: "Busca las flechas alrededor de un botón central. El botón de volver puede tener una flecha curva o decir «Back». No se señalan botones exactos porque no se ha podido verificar el mando del S36."
  },
  {
    kicker: "Conexión a Internet",
    title: "Conéctalo al Wi-Fi",
    intro: "En la pantalla del proyector, busca Ajustes y después Red o Wi-Fi.",
    detail: "<ol><li>Elige tu red Wi-Fi de Movistar.</li><li>Escribe la contraseña con el mando y confirma.</li><li>Espera a que indique que está conectado.</li></ol><p>El nombre de los menús puede variar. <strong>No escribas la contraseña en esta web:</strong> introdúcela solo en el proyector.</p>",
    visual: "wifi",
    caption: "La contraseña se introduce únicamente en el proyector",
    help: "Si tu router tiene dos redes, normalmente puedes elegir cualquiera que tenga Internet. Si la contraseña no funciona, comprueba mayúsculas y números en la etiqueta del router."
  },
  {
    kicker: "Comprobación",
    title: "Comprueba que tiene Internet",
    intro: "Abre una aplicación que use Internet o vuelve a la pantalla de inicio y espera unos segundos.",
    detail: "<p>Si carga su contenido, la conexión está lista. Si no, vuelve a Ajustes de red, comprueba que elegiste tu Wi-Fi y vuelve a introducir la contraseña en el proyector.</p>",
    visual: "internet",
    caption: "Una aplicación que carga es una buena señal",
    help: "Acerca el proyector al router para probar. Si otros dispositivos tampoco tienen Internet, puede que el problema sea la conexión del router y no el proyector."
  },
  {
    kicker: "Netflix",
    title: "Vamos a abrir Netflix",
    intro: "Busca Netflix en la pantalla de inicio o en la lista de aplicaciones del proyector.",
    detail: "<ol><li>Abre Netflix con el botón central del mando.</li><li>Inicia sesión allí con tu cuenta.</li><li>Comprueba que aparece la pantalla principal.</li></ol><p>El fabricante anuncia aplicaciones de streaming en el S36, pero su disponibilidad puede depender del país y del software instalado. Si el mando tiene un botón de Netflix, también puedes probarlo; no se ha podido confirmar si viene incluido. No introduzcas tus datos de Netflix en esta página.</p>",
    visual: "netflix",
    caption: "Pantalla de aplicaciones ilustrativa",
    help: "Si no ves Netflix, revisa la tienda de aplicaciones del proyector o consulta las actualizaciones disponibles. No todos los servicios están disponibles en todos los proyectores."
  },
  {
    kicker: "Movistar Plus+",
    title: "Comprueba si está disponible",
    intro: "Busca Movistar Plus+ en la tienda de aplicaciones del proyector.",
    detail: "<ol><li>Abre la tienda de aplicaciones.</li><li>Escribe «Movistar Plus+» en la búsqueda.</li><li>Si aparece, abre la ficha y comprueba que permite instalarla.</li><li>Después, inicia sesión desde la aplicación del proyector.</li></ol><p>Si no aparece, solo prueba «Enviar» o «Cast» desde el iPhone si la aplicación ofrece esa opción y el proyector aparece como destino.</p>",
    warning: "No se ha podido confirmar que Movistar Plus+ sea compatible con este modelo. Si no aparece en la tienda, no significa que el proyector esté estropeado. La emisión por duplicación o Cast también puede estar limitada por la aplicación.",
    visual: "movistar",
    caption: "Tienda genérica; el aspecto puede ser diferente",
    help: "Para usar Cast, el iPhone y el proyector deben estar en la misma red y el PUTRIMS debe aparecer en la lista de destinos de Movistar Plus+. Si no aparece, no hay una alternativa inalámbrica confirmada; consulta con Movistar o PUTRIMS qué dispositivo compatible puedes usar. La duplicación de pantalla puede bloquear el vídeo protegido."
  },
  {
    kicker: "Tu iPhone",
    title: "Conecta tu iPhone al proyector",
    intro: "Puedes intentar enviar fotos, vídeos y otros contenidos del iPhone a la pantalla grande.",
    detail: "<ol><li>Conecta el iPhone y el proyector a la misma red Wi-Fi.</li><li>En el iPhone, desliza hacia abajo desde la esquina superior derecha para abrir el Centro de control.</li><li>Pulsa «Duplicar pantalla».</li><li>Elige el nombre que muestre el proyector y espera a que se conecte.</li></ol><p>Para parar, vuelve al Centro de control, toca «Duplicar pantalla» y selecciona «Detener duplicación».</p>",
    warning: "Si una película no aparece al duplicar la pantalla, no significa que el proyector esté estropeado. Algunas aplicaciones protegen sus películas y pueden mostrar una pantalla negra. En ese caso, prueba la aplicación directamente desde el proyector.",
    visual: "iphone",
    caption: "El nombre del proyector puede aparecer de otra forma",
    help: "PUTRIMS anuncia AirPlay y duplicación inalámbrica para el S36. Si no aparece en la lista, revisa que ambos estén en la misma red y que la función de duplicación esté activada en el proyector. La disponibilidad puede variar."
  },
  {
    kicker: "¡Lo has conseguido!",
    title: "Tu cine ya está preparado",
    intro: "Prepara las palomitas, apaga las luces y disfruta de tu cine particular.",
    detail: `<p>Cuando quieras volver a hacer algo, toca una opción:</p>
      <div class="shortcut-grid">
        <button class="shortcut-button" type="button" data-jump="8">
          <span class="shortcut-icon" aria-hidden="true">▶</span>
          <span class="shortcut-title">Netflix</span>
          <span class="shortcut-description">Abre la app desde el proyector</span>
        </button>
        <button class="shortcut-button" type="button" data-jump="9">
          <span class="shortcut-icon" aria-hidden="true">⌕</span>
          <span class="shortcut-title">Movistar Plus+</span>
          <span class="shortcut-description">Busca la aplicación en la tienda</span>
        </button>
        <button class="shortcut-button" type="button" data-jump="10">
          <span class="shortcut-icon" aria-hidden="true">▣</span>
          <span class="shortcut-title">Conectar iPhone</span>
          <span class="shortcut-description">Centro de control · Duplicar pantalla</span>
        </button>
      </div>
      <p class="finish-note">Cada aplicación decide si permite enviar sus películas al proyector.</p>`,
    visual: "done",
    caption: "¡Disfruta de tu cine en casa!",
    button: "Terminar"
  }
];

const elements = {
  title: document.getElementById("step-title"),
  kicker: document.getElementById("step-kicker"),
  intro: document.getElementById("step-intro"),
  detail: document.getElementById("step-detail"),
  warning: document.getElementById("step-warning"),
  visual: document.getElementById("step-visual"),
  visualCaption: document.getElementById("visual-caption"),
  count: document.getElementById("step-count"),
  progressTrack: document.getElementById("progress-track"),
  progressFill: document.getElementById("progress-fill"),
  progressCaption: document.getElementById("progress-caption"),
  back: document.getElementById("back-button"),
  next: document.getElementById("next-button"),
  restart: document.getElementById("restart-top"),
  helpArea: document.getElementById("help-area"),
  helpToggle: document.getElementById("help-toggle"),
  helpContent: document.getElementById("help-content"),
  saveStatus: document.getElementById("save-status"),
  panel: document.getElementById("step-panel")
};

let hasStorageError = false;

function readSavedStep() {
  try {
    const saved = Number(window.localStorage.getItem(STORAGE_KEY));
    if (Number.isInteger(saved) && saved >= 0 && saved < steps.length) {
      return saved;
    }
    return 0;
  } catch (error) {
    hasStorageError = true;
    elements.saveStatus.textContent = "Safari no permitió recuperar el progreso. Puedes continuar, pero quizá tengas que empezar de nuevo si cierras esta página.";
    return 0;
  }
}

let currentStep = readSavedStep();

function saveStep() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(currentStep));
    hasStorageError = false;
  } catch (error) {
    hasStorageError = true;
    elements.saveStatus.textContent = "No se pudo guardar el progreso en este navegador. Puedes seguir usando la guía, pero quizá tengas que empezar de nuevo si la cierras.";
  }
}

function closeHelp() {
  elements.helpToggle.setAttribute("aria-expanded", "false");
  elements.helpContent.hidden = true;
}

function renderStep() {
  const step = steps[currentStep];
  const stepNumber = currentStep + 1;
  const percent = (stepNumber / steps.length) * 100;

  elements.panel.classList.remove("step-layout-enter");
  elements.title.textContent = step.title;
  elements.kicker.textContent = step.kicker;
  elements.intro.textContent = step.intro;
  elements.detail.innerHTML = step.detail;
  elements.visual.innerHTML = art[step.visual];
  elements.visualCaption.textContent = step.caption || "";
  elements.count.textContent = `Paso ${stepNumber} de ${steps.length}`;
  elements.progressTrack.setAttribute("aria-valuenow", String(stepNumber));
  elements.progressFill.style.width = `${percent}%`;
  elements.progressCaption.textContent = currentStep === steps.length - 1 ? "¡Ya está!" : "Un paso cada vez";
  elements.warning.textContent = step.warning || "";
  elements.warning.hidden = !step.warning;
  elements.back.disabled = currentStep === 0;
  elements.back.hidden = currentStep === 0;
  elements.next.innerHTML = `${step.button || "Continuar"} <span aria-hidden="true">→</span>`;
  elements.next.disabled = false;
  elements.helpArea.hidden = !step.help;
  elements.helpContent.innerHTML = step.help ? `<p>${step.help}</p>` : "";
  closeHelp();

  if (!hasStorageError) {
    elements.saveStatus.textContent = "";
  }

  if (currentStep === steps.length - 1) {
    elements.next.addEventListener("click", finishOnce, { once: true });
  } else {
    elements.next.removeEventListener("click", finishOnce);
  }
}

function finishOnce() {
  elements.next.disabled = true;
  elements.next.innerHTML = "¡A disfrutar! <span aria-hidden=\"true\">✓</span>";
  elements.saveStatus.textContent = "Asistente terminado. Puedes volver a esta guía cuando quieras.";
}

function goToStep(index) {
  if (!Number.isInteger(index) || index < 0 || index >= steps.length) {
    return;
  }
  currentStep = index;
  saveStep();
  renderStep();
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: 0, behavior });
}

elements.next.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    goToStep(currentStep + 1);
  }
});

elements.back.addEventListener("click", () => {
  if (currentStep > 0) {
    goToStep(currentStep - 1);
  }
});

elements.restart.addEventListener("click", () => {
  hasStorageError = false;
  goToStep(0);
  if (!hasStorageError) {
    elements.saveStatus.textContent = "Has vuelto al primer paso.";
  }
});

elements.helpToggle.addEventListener("click", () => {
  const isExpanded = elements.helpToggle.getAttribute("aria-expanded") === "true";
  elements.helpToggle.setAttribute("aria-expanded", String(!isExpanded));
  elements.helpContent.hidden = isExpanded;
});

elements.detail.addEventListener("click", (event) => {
  const shortcut = event.target.closest("[data-jump]");
  if (shortcut) {
    goToStep(Number(shortcut.dataset.jump));
  }
});

renderStep();
