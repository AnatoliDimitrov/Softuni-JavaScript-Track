function solution() {
    class Post{
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString();
            result += `\nRating: ${this.likes - this.dislikes}`;
            let strComments = '';
            if (this.comments.length > 0) {
                strComments += '\nComments:\n'
                for (const com of this.comments) {
                    strComments += ` * ${com}\n`;
                }
            }

            result += strComments;
            return result.trim();
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views = this.views + 1;
            return this;
        }

        toString() {
            let result = super.toString();
            result += `\nViews: ${this.views}`;
            return result.trim();
        }
    }

    return { Post, SocialMediaPost, BlogPost};
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

//Post: Post
//Content: Content

let blog = new classes.BlogPost('name', 'content', 10);
blog.view().view().view();

console.log(blog.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
