const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
const sidebarEl = document.querySelector('.sidebar');

sidebarOpenBtn.onclick = openSidebar;
sidebarCloseBtn.onclick = closeSidebar;

function closeSidebar() {
  sidebarOpenBtn.classList.remove('sidebar-open-btn--hidden')
  sidebarEl.classList.remove('sidebar--show');
  sidebarCloseBtn.classList.remove('sidebar-close-btn--show');
  sidebarEl.ontransitionend = null;

  document.body.onclick = null;
}

function openSidebar() {
  sidebarOpenBtn.classList.add('sidebar-open-btn--hidden')
  sidebarEl.classList.add('sidebar--show');
  sidebarEl.ontransitionend = () => {
    sidebarCloseBtn.classList.add('sidebar-close-btn--show');
  }

  document.body.onclick = e => {
    if(!e.target.closest('.sidebar') && !e.target.closest('.sidebar-open-btn')) {
      closeSidebar();
    }
  }
}