export default async function Home() {
  let health: any = null;

  try {
    const res = await fetch('http://localhost:3000/health', { cache: 'no-store' });
    health = await res.json();
  } catch (e) {
    health = { ok: false, error: 'API not reachable' };
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Ordo (dev)</h1>
      <p>Frontend + Backend connected.</p>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </main>
  );
}
