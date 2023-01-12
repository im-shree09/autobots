from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from .views import sending_email

def start():
    scheduler = BackgroundScheduler()
    # scheduler.add_job(sending_email , 'interval' , second = 5)
    scheduler.add_job(sending_email , 'cron' , day_of_week = 'mon-sun' ,  hour = 18 , minute = 28)
    scheduler.start()