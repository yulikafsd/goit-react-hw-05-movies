import { toast } from 'react-toastify';

export function notifyError() {
  toast.error('Oops! Something went wrong :( Try reload the page...');
}

export function notifyEndOfPage() {
  toast.info('You have reached end of the page');
}

export function notifyEmptyString() {
  toast.warning('This query is an empty string');
}

export function notifyNoResults() {
  toast.warning(
    'There are no movies for your query. Please, enter another one'
  );
}
