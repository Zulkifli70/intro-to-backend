export const createAuthPanel = (user) => `
  <section class="panel" id="auth">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Auth Interface</p>
        <h2>Register, login, dan logout</h2>
      </div>
      <div class="pill">Current user: ${user.username}</div>
    </div>

    <div class="form-grid">
      <form class="card-form" data-form="register">
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
        <button type="submit">Simulasikan Register</button>
      </form>

      <form class="card-form" data-form="login">
        <h3>Login</h3>
        <label>
          Email
          <input name="email" type="email" placeholder="Masukkan email" required />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Masukkan password" required />
        </label>
        <button type="submit">Simulasikan Login</button>
      </form>

      <form class="card-form" data-form="logout">
        <h3>Logout</h3>
        <label>
          Email
          <input name="email" type="email" value="${user.email}" required />
        </label>
        <button type="submit">Simulasikan Logout</button>
      </form>
    </div>
  </section>
`;
