import * as authService from '../services/authService.js';
//регистрация пользователя
export async function register(req, res, next) {
  try {
    const { email, password, name } = req.body;
    const { user, session } = await authService.register(email, password, name);
    res.status(201).json({ user, session });
  } catch (error) {
    next(error);
  }
}
//вход в систему
export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { session } = await authService.login(email, password);
    res.status(200).json({ session });
  } catch (error) {
    next(error);
  }
}
//выхрд из системы
export async function logout(req, res, next) {
  try {
    await authService.logout(req.headers.authorization.split(' '));
    res.status(200).json({ message: 'Выход выполнен' });
  } catch (error) {
    next(error);
  }
}
