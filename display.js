// Module Pattern implementation
const BlogApp = (function () {
    // Private variables
    const apiUrl = 'https://jsonplaceholder.typicode.com';
    const postsEndpoint = '/posts';
    const todosEndpoint = '/todos';

    // Private functions
    async function fetchData(endpoint) {
        try {
            const response = await fetch(`${apiUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Fetch failed: ${error.message}`);
        }
    }

    function displayPosts(posts) {
        const postList = document.getElementById('post-list');
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postList.appendChild(listItem);
        });
    }

    function displayTodos(todos) {
        const todoList = document.getElementById('todo-list');
        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;
            todoList.appendChild(listItem);
        });
    }

    function displayError(message) {
        // Display error message to the user
        console.error(message);
    }

    // Public functions
    async function fetchAndDisplayPosts() {
        try {
            const posts = await fetchData(postsEndpoint);
            displayPosts(posts);
        } catch (error) {
            displayError(error.message);
        }
    }

    async function fetchAndDisplayTodos() {
        try {
            const todos = await fetchData(todosEndpoint);
            displayTodos(todos);
        } catch (error) {
            displayError(error.message);
        }
    }

    // Return public methods
    return {
        fetchAndDisplayPosts,
        fetchAndDisplayTodos
    };
})();

// Fetch and display posts and todos on page load
window.addEventListener('DOMContentLoaded', () => {
    BlogApp.fetchAndDisplayPosts();
    BlogApp.fetchAndDisplayTodos();
});
