
document.body.classList.add('loading');
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});

document.addEventListener('DOMContentLoaded', () => {
  const nukeButton = document.querySelector('button');
  
  nukeButton.addEventListener('click', () => {
    const elements = document.body.children;
    const elementsToRemove = [...elements].filter(el => el !== nukeButton);
    
    elementsToRemove.forEach(el => {
      el.style.transition = 'opacity 1s';
      el.style.opacity = '0';
    });
    
    setTimeout(() => {
      elementsToRemove.forEach(el => el.remove());
      
      const explosion = document.createElement('img');
      explosion.src = 'explosion-cat.gif';
      explosion.style.display = 'block';
      explosion.style.margin = '0 auto';
      explosion.style.maxWidth = '80%';
      document.body.appendChild(explosion);
      
      const message = document.createElement('h2');
      message.textContent = 'Total Destruction Achieved';
      message.style.color = 'red';
      message.style.textAlign = 'center';
      message.style.marginTop = '20px';
      
      document.body.appendChild(message);
    }, 1000);
  });
});
