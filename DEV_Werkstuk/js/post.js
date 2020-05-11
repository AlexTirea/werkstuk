export class Post {
    constructor(data) {
        this.data = data;
    }
    get readableDate() {
        const date = new Date(this.data.createdAt.seconds * 1000);
        const readableTime = date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        })
        const readableDate = date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return `${readableTime} ${readableDate}`;
    }
    get htmlString() {
        // console.log(this.data);
        return `
        <section id="${this.data.id}" class="post">
        <h3>${this.data.title}</h3>
         <h5>${this.readableDate}</h5>
        <p>${this.data.artist}</p>
        <img src="${this.data.imageLink}" />
         <div class="likeWrapper">
          <button>
           Like
          </button>
          <div>${this.data.countOfLikes}</div>
         </div>
        </section>
        `;
    }
}