import { Notify } from 'quasar';
import { api } from 'src/boot/axios';

export const sendRequest = async (
  phone: string | null,
  name: string | null,
  description?: string | null,
  email?: string | null
) => {
  try {
    await api.post('/leads/', {
      phone: phone || null,
      description: description || null,
      email: email || null,
      name: name || null
    });
    return true;
  } catch {
    Notify.create({
      message: 'Не удалось отправить запрос. Попробуйте позже',
      color: 'red'
    });
    return false;
  }
};
