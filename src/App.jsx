import { useState } from "react";

/* ---------- Tiny inline SVG icons (no extra packages needed) ---------- */
const Icon = ({ children, size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    {children}
  </svg>
);

const SignalIcon = (p) => (
  <Icon {...p}><path d="M2 22h3V15H2v7zm5 0h3V11H7v11zm5 0h3V7h-3v15zm5 0h3V2h-3v20z" /></Icon>
);
const WifiIcon = (p) => (
  <Icon {...p}>
    <path d="M12 18.5l3.5-3.5a5 5 0 00-7 0L12 18.5zm0-9c-2.7 0-5.2 1-7.1 2.9l2.1 2.1a7 7 0 0110 0l2.1-2.1A10 10 0 0012 9.500zm0-5C7.600 4.500 3.500 6.200.400 9.300l2.100 2.100a12.900 12.900 0 0119 0l2.100-2.100A15.900 15.900 0 0012 4.500z" />
  </Icon>
);
const BatteryIcon = (p) => (
  <Icon {...p}><path d="M16 4h-1.500V2h-5v2H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" /></Icon>
);
const PersonIcon = (p) => (
  <Icon {...p}><path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-2.700 0-8 1.300-8 4v2h16v-2c0-2.700-5.300-4-8-4z" /></Icon>
);
const CheckIcon = (p) => (
  <Icon {...p}><path d="M9 16.2L4.8 12l-2.8 2.8L9 21.800 22 8.800 19.200 6z" /></Icon>
);
const EmailIcon = (p) => (
  <Icon {...p}><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></Icon>
);
const StarIcon = (p) => (
  <Icon {...p}><path d="M12 17.300l6.200 3.700-1.600-7L22 9.200l-7.200-.6L12 2 9.200 8.600 2 9.200 7.400 14l-1.600 7z" /></Icon>
);
const AddIcon = (p) => (
  <Icon {...p}><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></Icon>
);

/* ---------- Styles ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#eeeeee",
    textAlign: "left",
    fontFamily: "Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  frame: {
    width: 320,
    height: 650,
    padding: 14,
    boxSizing: "border-box",
    background: "#000",
    borderRadius: 40,
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  },
  frameInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 28,
    overflow: "hidden",
  },
  screenSlot: { position: "absolute", top: 28, left: 0, right: 0, bottom: 0 },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 28,
    background: "#000",
    padding: "0 16px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },
  time: { fontSize: 12, fontWeight: 600 },
  statusIcons: { display: "flex", alignItems: "center", gap: 4 },
  notchWrap: {
    position: "absolute",
    top: 8,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  notch: { width: 10, height: 10, borderRadius: "50%", background: "#000" },
  homeBarWrap: {
    position: "absolute",
    bottom: 6,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  homeBar: {
    width: 100,
    height: 4,
    borderRadius: 2,
    background: "rgba(255,255,255,0.8)",
  },

  /* Profile screen */
  screen: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
  },
  appBar: {
    height: 56,
    flexShrink: 0,
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  body: { padding: "32px 24px", flex: 1, overflowY: "auto", textAlign: "left" },
  avatarRow: { display: "flex", justifyContent: "center" },
  avatarWrap: { position: "relative", width: 110, height: 110 },
  avatar: {
    width: 110,
    height: 110,
    boxSizing: "border-box",
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRing: {
    width: 90,
    height: 90,
    boxSizing: "border-box",
    borderRadius: "50%",
    border: "1px solid #f06292",
    background: "#fff",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImg: { width: "100%", height: "100%", objectFit: "cover" },
  badge: {
    position: "absolute",
    bottom: 14,
    right: 10,
    display: "flex",
  },
  divider: { border: "none", borderTop: "1px solid #212121", margin: "24px 0" },
  field: { marginBottom: 18, textAlign: "left" },
  label: { color: "#000", fontWeight: "bold", fontSize: 15, margin: 0 },
  value: { color: "#212121", fontSize: 14, margin: "4px 0 0" },
  valueRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 6,
    color: "#212121",
    fontSize: 14,
    marginTop: 4,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    border: "none",
    borderRadius: 16,
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
  },
};

/* ---------- PhoneFrame ---------- */
function PhoneFrame({ children }) {
  return (
    <div style={styles.frame}>
      <div style={styles.frameInner}>
        <div style={styles.screenSlot}>{children}</div>

        <div style={styles.statusBar}>
          <span style={styles.time}>8:33</span>
          <div style={styles.statusIcons}>
            <SignalIcon size={14} />
            <WifiIcon size={14} />
            <BatteryIcon size={16} />
          </div>
        </div>

        <div style={styles.notchWrap}>
          <div style={styles.notch} />
        </div>

        <div style={styles.homeBarWrap}>
          <div style={styles.homeBar} />
        </div>
      </div>
    </div>
  );
}

/* ---------- ProfileScreen ---------- */
function ProfileScreen() {
  // Put your image at public/profile.jpg. If missing, a person icon shows.
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div style={styles.screen}>
      <header style={styles.appBar}>My Profile</header>

      <div style={styles.body}>
        <div style={styles.avatarRow}>
          <div style={styles.avatarWrap}>
            <div style={styles.avatar}>
              <div style={styles.avatarRing}>
                {imgFailed ? (
                  <PersonIcon size={50} color="#bdbdbd" />
                ) : (
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    style={styles.avatarImg}
                    onError={() => setImgFailed(true)}
                  />
                )}
              </div>
            </div>
            <div style={styles.badge}>
              <CheckIcon size={30} color="#00E600" />
            </div>
          </div>
        </div>

        <hr style={styles.divider} />

        <div style={styles.field}>
          <p style={styles.label}>Name</p>
          <p style={styles.value}>Diluka</p>
        </div>

        <div style={styles.field}>
          <p style={styles.label}>Email</p>
          <div style={styles.valueRow}>
            <EmailIcon size={15} />
            <span>diluka.w@nsbm.ac.lk</span>
          </div>
        </div>

        <div style={styles.field}>
          <p style={styles.label}>Points</p>
          <div style={styles.valueRow}>
            <StarIcon size={15} />
            <span>0</span>
          </div>
        </div>
      </div>

      <button style={styles.fab} onClick={() => {}} aria-label="Add">
        <AddIcon size={24} />
      </button>
    </div>
  );
}

/* ---------- App (root) ---------- */
export default function App() {
  return (
    <div style={styles.page}>
      <PhoneFrame>
        <ProfileScreen />
      </PhoneFrame>
    </div>
  );
}