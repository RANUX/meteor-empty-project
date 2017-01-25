#!/bin/bash


pm2-meteor undeploy && pm2-meteor deploy && pm2-meteor start
