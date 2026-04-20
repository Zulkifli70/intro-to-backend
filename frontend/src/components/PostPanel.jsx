function parseForm(event) {
  const formData = new FormData(event.currentTarget);
  const payload = Object.fromEntries(formData.entries());
  payload.age = Number(payload.age);
  return payload;
}

export function PostPanel({ onCreatePost, onDeletePost, onUpdatePost, posts }) {
  const handleCreatePost = async (event) => {
    event.preventDefault();
    await onCreatePost(parseForm(event));
    event.currentTarget.reset();
  };

  const handleUpdatePost = (postId) => async (event) => {
    event.preventDefault();
    await onUpdatePost(postId, parseForm(event));
  };

  return (
    <section className="panel" id="posts">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Post Interface</p>
          <h2>Create dan kelola post</h2>
        </div>
        <div className="pill">{posts.length} synced post</div>
      </div>

      <div className="posts-layout">
        <form className="card-form" onSubmit={handleCreatePost}>
          <h3>Tambah Post</h3>
          <label>
            Name
            <input name="name" type="text" placeholder="Nama post" required />
          </label>
          <label>
            Description
            <textarea
              name="description"
              rows="4"
              placeholder="Deskripsi post"
              required
            />
          </label>
          <label>
            Age
            <input name="age" type="number" min="1" placeholder="Umur/data age" required />
          </label>
          <button type="submit">Tambah Post ke Backend</button>
        </form>

        <div className="post-list">
          {posts.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-top">
                <div>
                  <h3>{post.name}</h3>
                  <p>{post.description}</p>
                </div>
                <span className="status">{post.status}</span>
              </div>

              <div className="post-meta">
                <span>Age: {post.age}</span>
                <span>ID: {post.id}</span>
              </div>

              <form className="inline-form" onSubmit={handleUpdatePost(post.id)}>
                <input defaultValue={post.name} name="name" type="text" />
                <input defaultValue={post.age} min="1" name="age" type="number" />
                <button type="submit">Update</button>
              </form>

              <button
                className="button-secondary"
                onClick={() => onDeletePost(post.id)}
                type="button"
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
