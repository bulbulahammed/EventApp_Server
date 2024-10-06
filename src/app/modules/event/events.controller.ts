/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import eventsService from "./events.service";
import sendResponse from "../../../shared/sendResponse";
import { IEvent } from "./events.interface";
import httpStatus from "http-status";


// Create Event Controller 
const createEvent: RequestHandler = catchAsync(
async (req: Request, res: Response)=>{
    try{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {event} = req.body
        const result = await eventsService.createEvent(event)
        sendResponse<IEvent>(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: "Event Created Successfully!",
            data: result,
        })
    }catch(error){
        sendResponse<IEvent>(res,{
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: "An error occurred during Create Event",
            error: (error as Error).message as string,
        })
    }
},
)

export const EventController = {
createEvent
}