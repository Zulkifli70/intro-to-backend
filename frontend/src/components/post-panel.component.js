export const createPostPanel = (posts) => `
  <section class="panel" id="posts">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Post Interface</p>
        <h2>Create dan kelola post</h2>
      </div>
      <div class="pill">${posts.length} mock post</div>
    </div>

    <div class="posts-layout">
      <form class="card-form" data-form="post-create">
        <h3>Tambah Post</h3>
        <label>
          Name
          <input name="name" type="text" placeholder="Nama post" required />
        </label>
        <label>
          Description
          <textarea name="description" rows="4" placeholder="Deskripsi post" required></textarea>
        </label>
        <label>
          Age
          <input name="age" type="number" min="1" placeholder="Umur/data age" required />
        </label>
        <button type="submit">Tambah Mock Post</button>
      </form>

      <div class="post-list">
        ${posts
          .map(
            (post) => `
              <article class="post-card">
                <div class="post-top">
                  <div>
                    <h3>${post.name}</h3>
                    <p>${post.description}</p>
                  </div>
                  <span class="status">${post.status}</span>
                </div>
                <div class="post-meta">
                  <span>Age: ${post.age}</span>
                  <span>ID: ${post.id}</span>
                </div>
                <form class="inline-form" data-form="post-update" data-id="${post.id}">
                  <input name="name" type="text" value="${post.name}" />
                  <input name="age" type="number" min="1" value="${post.age}" />
                  <button type="submit">Update</button>
                </form>
                <button class="button-secondary" data-action="delete-post" data-id="${post.id}">
                  Delete
                </button>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;
