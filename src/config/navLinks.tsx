import Overview from 'assets/icons/overview.svg';
import AllPayment from 'assets/icons/payment.svg';
import reconcilePayment from 'assets/icons/reconcil_payment.svg';
import unReconcilePayment from 'assets/icons/unreconcil_payment.svg';
import manualSettings from 'assets/icons/manual_settings.svg';
import allOrders from 'assets/icons/all_orders.svg';
import pendingOrders from 'assets/icons/pending_orders.svg';
import reconcilOrders from 'assets/icons/reconcile_orders.svg';
import merchantProfile from 'assets/icons/merchant_profile.svg';

export const navLinks = [
    {
        title: 'overview',
        url: '/',
        icon: Overview
    },
    {
        title: 'All Payments',
        url: '',
        icon: AllPayment

    },
    {
        title: 'Reconcilled Payments',
        url: '',
        icon: reconcilePayment,
    },
    {
        title: 'Un-Reconcilled Payments',
        url: '',
        icon: unReconcilePayment
    },
    {
        title: 'Manual Settlement',
        url: '',
        icon: manualSettings
    },
    {
        title: 'All Orders',
        url: '',
        icon: allOrders,
    },
    {
        title: 'Pending Orders',
        url: '',
        icon: pendingOrders
    },
    {
        title: 'Reconcilled Orders',
        url: '',
        icon: reconcilOrders
    },
    {
        title: 'Merchant Profile',
        url: '',
        icon: merchantProfile
    }

]

