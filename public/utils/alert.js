import Swal from 'sweetalert2'

export function fireNotification(message) {
    const Toast = Swal.mixin({
        iconColor: '#e4d5b7',
        color: 'black',
        backgroundColor: '#e4d5b7',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

    Toast.fire({
        icon: 'success',
        title: message,
    })
}
