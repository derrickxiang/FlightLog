type Flight = {
    id?: string;
    tailNumber: string;
    flightId: string;
    takeoff: string;
    landing: string;
    duration: string;
    updateAt?: string;
    createdAt?: string;
    isDeleted?: boolean = false;
}