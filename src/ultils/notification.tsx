interface IProps {
  message: string;
}

interface IPropsToast {
  title: string;
  message: string;
  type: 'success' | 'error' | 'danger';
  durationShow?: number;
  durationHide?: number;
  delay?: number;
}

const toastGlobal = (props: IPropsToast) => {
  const { title, message, durationShow, durationHide, delay, type } = props;

  const main = document.getElementById('toast-custom');

  const durationShowToast = ((durationShow ?? 300) / 1000).toFixed(2);
  const durationHideToast = ((durationHide ?? 1500) / 1000).toFixed(2);
  const delayToast = ((delay ?? 3000) / 1000).toFixed(2);

  let colorBorderToast = ``;
  let iconToast = '';
  switch (type) {
    case 'success':
      iconToast = '/img/image-icon/ICTick.jpg';
      colorBorderToast = `#55D5D2`;
      break;
    case 'danger':
      iconToast = '/img/image-icon/danger.png';
      colorBorderToast = `#FF7C33`;
      break;
    case 'error':
      iconToast = '/img/image-icon/error.png';
      colorBorderToast = `#ED1C24`;
      break;
    default:
      iconToast = '/img/image-icon/ICTick.jpg';
      colorBorderToast = `#55D5D2`;
  }

  if (main) {
    const toast = document.createElement('div');

    // auto remove toast
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, 4500);

    toast.classList.add('toast-global');
    toast.style.animation = `toastRightToLeft ease ${durationShowToast}s, hideToast linear ${durationHideToast}s ${delayToast}s forwards`;
    toast.style.borderLeftColor = colorBorderToast;

    // close toast
    toast.addEventListener('click', () => {
      main.removeChild(toast);
      clearTimeout(autoRemoveId);
    });

    toast.innerHTML = `
            <div class="start-icon-toast">
              <Image
                src=${iconToast}
                width={1000}
                height={1000}
                alt="banner cart"
                className="w-full h-full object-cover"
              />
            </div>
            <div class="content-toast">
              <p class="title-toast">
                ${title}
              </p>
              <p class="message-toast">
                ${message}
              </p>
            </div>
           <div class='close-toast'>
            <img
                src='/img/image-icon/close-icon.png'
                alt="banner cart"
                class=" w-full h-full object-cover"
              />
            </div>`;

    main.appendChild(toast);
  }
};

const onSuccess = (props: IProps) => {
  toastGlobal({
    title: 'Thành công !',
    message: props?.message,
    type: 'success',
    durationShow: 300,
  });
};

const onError = (props?: IProps) => {
  // toast('Thất bại!', {
  //   duration: 1500,
  //   description: props?.message ?? 'Thao tác thất bại, xin vui lòng thử lại.',
  //   position: 'top-right',
  //   style: {
  //     color: 'red',
  //     fontWeight: '800',
  //     fontSize: '1.1rem',
  //   },
  //   action: {
  //     label: 'Undo',
  //     onClick: () => console.log('Undo'),
  //   },
  // });

  toastGlobal({
    title: 'Thất bại !',
    message: props?.message ?? 'Thao tác thất bại, xin vui lòng thử lại.',
    type: 'error',
  });
};

const onErrorContact = (props: IProps) => {
  // toast('Thất bại!', {
  //   duration: 1500,
  //   description: props.message,
  //   position: 'top-right',
  //   style: {
  //     color: 'red',
  //     fontWeight: '800',
  //     fontSize: '1.1rem',
  //   },
  //   action: {
  //     label: 'Undo',
  //     onClick: () => console.log('Undo'),
  //   },
  // });

  toastGlobal({
    title: 'Thành công !',
    message: props.message,
    type: 'error',
  });
};

export { onSuccess, onError, onErrorContact };
