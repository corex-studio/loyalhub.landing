import { initYandexMetrika, useYandexMetrika } from 'yandex-metrika-vue3';
import { boot } from 'quasar/wrappers';

export enum METRIKA_GOAL_EVENT {
  LOAD = 'load',
  REQUEST_FORM_OPENED = 'request_form_opened',
  TARIFF_COMPUTED = 'tariff_computed',
  SUBMIT_REQUEST = 'submit_request',
  TELEGRAM_AFTER_SUBMIT_REQUEST = 'telegram_after_submit_request'
}


export default boot(({ app, router }) => {
  app.use(initYandexMetrika, {
    id: '96901385',
    router: router,
    env: process.env.NODE_ENV,
    scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
    debug: false,
    options: {
      webvisor: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      defer: true
    }
    // other options
  });
});

export type MetrikaClickParams = {
  goalEvent?: METRIKA_GOAL_EVENT
}

export const useMetrikaTick = () => {
  const metrika = useYandexMetrika();

  const metrikaTick = (params?: MetrikaClickParams) => {
    if (params?.goalEvent)
      metrika.reachGoal(params?.goalEvent);
  };

  return { metrikaTick, metrika };
};
