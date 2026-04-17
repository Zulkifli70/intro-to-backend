import { ApiMap } from "../components/ApiMap.jsx";
import { AuthPanel } from "../components/AuthPanel.jsx";
import { Layout } from "../components/Layout.jsx";
import { PostPanel } from "../components/PostPanel.jsx";
import { StatCards } from "../components/StatCards.jsx";

export function DashboardPage(props) {
  const {
    posts,
    user,
    onCreatePost,
    onDeletePost,
    onLogin,
    onLogout,
    onRegister,
    onUpdatePost,
  } = props;

  return (
    <Layout>
      <section className="hero">
        <p className="eyebrow">Simple Frontend</p>
        <h2>Dashboard frontend untuk backend auth dan posts</h2>
        <p className="hero-copy">
          Fokusnya masih di interface dan struktur file. Logic service sudah dipisah
          supaya nanti saat backend siap, kita tinggal ganti mock function ke HTTP
          request.
        </p>
      </section>

      <StatCards posts={posts} user={user} />
      <AuthPanel
        onLogin={onLogin}
        onLogout={onLogout}
        onRegister={onRegister}
        user={user}
      />
      <PostPanel
        onCreatePost={onCreatePost}
        onDeletePost={onDeletePost}
        onUpdatePost={onUpdatePost}
        posts={posts}
      />
      <ApiMap />
    </Layout>
  );
}
