export enum EOrderStatus {
    WAITING_TOUR_GUIDE = '0',
    WAITING_PREPAID = '1',
    WAITING_PURCHASE = '2',
    WAITING_START = '3',
    PROCESSING = '4',
    DONE = '5',
    REJECTED = '6',
}

export enum EOrderType {
    WAITING  = 'waiting',
    PROCESSING = 'processing',
    END = 'end',
}
