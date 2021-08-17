class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        } else {
            this._likes.splice(this._likes.indexOf(username), 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (id === undefined || (id - 1 < 0 || id - 1 >= this._comments.length)) {
            let comm = {
                id: this._comments.length,
                username: username,
                content: content,
                replies: [],
            }

            this._comments.push(comm);
            return `${username} commented on ${this.title}`;
        } else {
            let commToReply = this._comments[id - 1];
            let reply = {
                id: commToReply.replies.length,
                username: username,
                content: content
            };

            commToReply.replies.push(reply);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
        if (sortingType === 'asc') {

            if (this._comments.length > 0) {
                for (const comment of this._comments) {
                    result += `-- ${comment.id + 1}. ${comment.username}: ${comment.content}\n`;
                    if (comment.replies.length > 0) {
                        for (const reply of comment.replies) {
                            result += `--- ${comment.id + 1}.${reply.id + 1}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
            }
        } else if (sortingType === 'desc') {

            if (this._comments.length > 0) {
                let sorted = this._comments.sort((a, b) => b.id - a.id);
                for (const comment of sorted) {
                    result += `-- ${comment.id + 1}. ${comment.username}: ${comment.content}\n`;
                    if (comment.replies.length > 0) {
                        let sortedReplies = comment.replies.sort((a, b) => b.id - a.id);
                        for (const reply of sortedReplies) {
                            result += `--- ${comment.id + 1}.${reply.id + 1}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
            }
        } else if (sortingType === 'username') {

            if (this._comments.length > 0) {
                let sorted = this._comments.sort((a, b) => a.username.localeCompare(b.username));
                for (const comment of sorted) {
                    result += `-- ${comment.id + 1}. ${comment.username}: ${comment.content}\n`;
                    if (comment.replies.length > 0) {
                        let sortedReplies = comment.replies.sort((a, b) => a.username.localeCompare(b.username));
                        for (const reply of sortedReplies) {
                            result += `--- ${comment.id + 1}.${reply.id + 1}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
            }
        }
        return result.trim();
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));

//const Story = result;
let art = new Story("My Story", "Anny");
art.like("John");
art.likes, "John likes this story!";
//art.dislike("Sally");
art.like("Ivan");
art.like("Steven");
art.comment("Anny", "Some Content");
art.comment("Ammy", "New Content", 1);
art.comment("Zane", "Reply", 2);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 2));


