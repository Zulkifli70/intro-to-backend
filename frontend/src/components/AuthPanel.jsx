function parseForm(event) {
  const formData = new FormData(event.currentTarget);
  return Object.fromEntries(formData.entries());
}

export function AuthPanel({ user, onLogin, onLogout, onRegister }) {
  const handleRegister = async (event) => {
    event.preventDefault();
    await onRegister(parseForm(event));
    event.currentTarget.reset();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    await onLogin(parseForm(event));
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    await onLogout(parseForm(event));
  };

  return (
    <section className="panel" id="auth">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Auth Interface</p>
          <h2>Register, login, dan logout</h2>
        </div>
        <div className="pill">
          Current user: {user?.username || "Belum login"}
        </div>
      </div>

      <div className="form-grid">
        <form className="card-form" onSubmit={handleRegister}>
          <h3>Register</h3>
          <label>
            Username
            <input name="username" type="text" placeholder="Masukkan username" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="Masukkan email" required />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Masukkan password" required />
          </label>
          <button type="submit">Register User</button>
        </form>

        <form className="card-form" onSubmit={handleLogin}>
          <h3>Login</h3>
          <label>
            Email
            <input name="email" type="email" placeholder="Masukkan email" required />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Masukkan password" required />
          </label>
          <button type="submit">Login User</button>
        </form>

        <form className="card-form" onSubmit={handleLogout}>
          <h3>Logout</h3>
          <label>
            Email
            <input
              defaultValue={user?.email || ""}
              name="email"
              type="email"
              placeholder="Email user yang login"
              required
            />
          </label>
          <button type="submit">Logout User</button>
        </form>
      </div>
    </section>
  );
}
