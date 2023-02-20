window.onload = function() {
  const headerTitle = document.querySelector('header h1');
  const contentItem = document.querySelectorAll('.wrap .item')
  headerTitle.classList.add('animate');
  
  contentItem.forEach(value => {
    value.classList.add('animate');
  })
}