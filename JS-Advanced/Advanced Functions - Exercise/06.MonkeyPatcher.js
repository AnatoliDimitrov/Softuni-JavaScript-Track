function solution(op) {
    let operations = {
        upvote() {
            this.upvotes += 1;
        },
        downvote() {
            this.downvotes += 1;
        },
        score() {
            let totalScore = this.upvotes - this.downvotes;
            let totalVotes = this.upvotes + this.downvotes;

            let rating = 'new';
            if (totalVotes < 10) {
                rating = 'new';
            } else if (this.upvotes / totalVotes > 0.66) {
                rating = 'hot';
            } else if (totalScore >= 0 && totalVotes > 100) {
                rating = 'controversial';
            } else if (totalScore < 0) {
                rating = 'unpopular';
            }

            let result = [];
            if (totalVotes > 50) {
                if (totalScore >= 0) {
                    result.push(Math.ceil(this.upvotes * 1.25));
                    result.push(Math.ceil(this.upvotes * 1.25) - totalScore);
                } else {
                    result.push(Math.ceil(this.downvotes * 1.25) + totalScore);
                    result.push(Math.ceil(this.downvotes * 1.25));
                } 
            } else {
                result.push(this.upvotes);
                result.push(this.downvotes);
            }

            result.push(totalScore);
            result.push(rating);

            return result;
        }
    }

    return operations[op].call(this);
}

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'score');

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
// solution. call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');
// solution.call(post, 'downvote');   // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
