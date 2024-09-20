import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const monkInfo = await backend.getMonkInfo();
    document.getElementById('monk-info').textContent = monkInfo;
  } catch (error) {
    console.error('Error fetching monk information:', error);
    document.getElementById('monk-info').textContent = 'Failed to load monk information. Please try again later.';
  }
});
